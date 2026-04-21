from flask import Blueprint, request
from psycopg2 import errors
from app.middlewares.auth_middleware import token_required
from .services import (
    get_cart,
    add_product,
    delete_product,
    update_quantity,
)

carts_bp = Blueprint("carts", __name__)


@carts_bp.get("/cart")
@token_required
def get_cart_route():
    user_id = request.user_id
    return get_cart(user_id), 200


@carts_bp.post("/cart/product")
@token_required
def add_product_route():
    product_data = request.get_json()
    product_id = product_data.get("product_id")
    quantity = product_data.get("quantity")

    if not product_id or not quantity:
        return {"message": "product_id and quantity are required"}, 400

    user_id = request.user_id

    return add_product(user_id, product_id, quantity), 201


@carts_bp.delete("/cart/product/<int:product_id>")
@token_required
def delete_product_route(product_id):
    user_id = request.user_id
    deleted_product = delete_product(user_id, product_id)

    if not deleted_product:
        return {"message": "Product not found in cart"}, 404

    return deleted_product, 200


@carts_bp.put("/cart/product/<int:product_id>")
@token_required
def update_product_route(product_id):
    product_data = request.get_json()
    quantity = product_data.get("quantity")
    user_id = request.user_id

    if not quantity:
        return {"message": "No data provided"}, 400

    updated_quantity = update_quantity(user_id, product_id, quantity)

    if not updated_quantity:
        return {"message": "Product not found"}, 404

    return updated_quantity, 200
