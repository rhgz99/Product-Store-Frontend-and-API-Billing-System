from flask import Blueprint, request
from .services import (
    create_product,
    get_products,
    get_product,
    delete_product,
    update_product,
)

products_bp = Blueprint("products", __name__)


@products_bp.post("/products")
def create_product_route():
    try:
        new_product = request.get_json()

        if new_product is None:
            return {"message": "No data provided"}, 400

        return create_product(new_product), 201

    except ValueError as e:
        return {"message": str(e)}, 400


@products_bp.get("/products")
def get_products_route():
    return get_products(), 200


@products_bp.get("/products/<int:id>")
def get_product_route(id):
    product = get_product(id)

    if product is None:
        return {"message": "Product not found"}, 404

    return product, 200


@products_bp.delete("/products/<int:id>")
def delete_product_route(id):
    delated_product = delete_product(id)

    if delated_product is None:
        return {"message": "Product not found"}, 404

    return delated_product, 200


@products_bp.put("/products/<int:id>")
def update_product_route(id):
    try:
        product = request.get_json()

        if product is None:
            return {"message": "No data provided"}, 400

        updated_product = update_product(id, product)

        if updated_product is None:
            return {"message": "Product not found"}, 404

        return updated_product, 200

    except ValueError as e:
        return {"message": str(e)}, 400
