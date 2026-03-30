from flask import Blueprint, request, jsonify
from . import products_service

products_bp = Blueprint('product', __name__)

@products_bp.route('/products', methods=['GET'])
def get_product():
    return jsonify(products_service.get_product())

@products_bp.route('/products', methods=['POST'])
def create_product():
    data = request.json
    product = products_service.create_product(data)
    return jsonify(product)