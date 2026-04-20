from flask import Blueprint, request
from psycopg2 import errors
from .services import create_cart, get_cart, add_product, delete_product, update_quantity

carts_bp = Blueprint("carts", __name__)


@carts_bp.post("/cart")
def create_cart_route():
    try:
        data = request.get_json()
        user_id = data.get("user_id")

        if data is None or user_id is None:
            return {"message": "user_id is required"}, 400

        return create_cart(user_id), 201

    except errors.ForeignKeyViolation:
        return {"message": "User not found"}, 404

    except Exception:
        return {"message": "Error creating cart"}, 500

@carts_bp.get("/cart/<int:user_id>")
def get_cart_route(user_id):
    if user_id is None:
        return {"message": "user_id is required"}, 400

    return get_cart(user_id), 200


@carts_bp.post("/cart/<int:cart_id>/product")
def add_product_route(cart_id):
    data = request.get_json()
    product_id = data.get("product_id")
    quantity = data.get("quantity")
    print(data)

    if product_id is None or quantity is None:
        return {"message": "product_id and quantity are required"}, 400

    return add_product(cart_id, product_id, quantity), 201


@carts_bp.delete("/cart/<int:cart_id>/<int:product_id>")
def delete_product_route(cart_id, product_id):
    deleted_product = delete_product(cart_id, product_id)

    if deleted_product is None:
        return {"message": "Product not found in cart"}, 404

    return deleted_product, 200  

@carts_bp.put("/cart/<int:cart_id>/<int:product_id>")
def update_product_route(cart_id, product_id):
    product_quantity = request.get_json()

    if product_quantity is None:
        return {"message": 'No data provided'}, 400
    
    updated_quantity = update_quantity(cart_id, product_id, product_quantity)

    if updated_quantity is None:
        return {"message": "Cart or Product not found"}, 404

    return updated_quantity

