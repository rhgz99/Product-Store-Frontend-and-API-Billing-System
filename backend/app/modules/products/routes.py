from flask import Blueprint, request, jsonify
from . import service

products_bp = Blueprint('product', __name__)

@products_bp.route('/products', methods=['GET'])
def get_product():
    return jsonify(service.get_product())

@products_bp.route('/products', methods=['POST'])
def create_product():
    data = request.json
    product = service.create_product(data)
    return jsonify(product)