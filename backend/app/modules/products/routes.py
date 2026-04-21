from flask import Blueprint, request
from app.middlewares.auth_middleware import token_required
from .services import (
    create_product,
    get_products,
    get_product,
    delete_product,
    update_product,
)

products_bp = Blueprint("products", __name__)


@products_bp.post("/products")
@token_required
def create_product_route():
    new_product = request.get_json()

    if not new_product:
        return {"message": "No data provided"}, 400

    return create_product(new_product), 201


@products_bp.get("/products")
@token_required
def get_products_route():
    return get_products(), 200


@products_bp.get("/products/<int:id>")
@token_required
def get_product_route(id):
    product = get_product(id)

    if not product:
        return {"message": "Product not found"}, 404

    return product, 200


@products_bp.delete("/products/<int:id>")
def delete_product_route(id):
    delated_product = delete_product(id)

    if not delated_product:
        return {"message": "Product not found"}, 404

    return delated_product, 200


@products_bp.put("/products/<int:id>")
def update_product_route(id):
    product = request.get_json()

    if not product:
        return {"message": "No data provided"}, 400

    updated_product = update_product(id, product)

    if not updated_product:
        return {"message": "Product not found"}, 404

    return updated_product, 200
