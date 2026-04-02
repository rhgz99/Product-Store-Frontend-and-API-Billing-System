from flask import Blueprint, request, jsonify
from . import services 

client_bp = Blueprint("client", __name__)


@client_bp.route("/clients", methods=["GET"])
def get_client():
    return jsonify(services.get_client())


@client_bp.route('/clients', methods=['POST'])
def create_client():
    data = request.json
    client = services.create_client(data)
    return jsonify(client)