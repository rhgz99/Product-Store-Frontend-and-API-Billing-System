from flask import Blueprint, request
from .services import create_user, get_users, get_user, delete_user, update_password

users_bp = Blueprint("users", __name__)


@users_bp.post("/users")
def create_user_route():
    new_user = request.get_json()

    if new_user is None:
        return {"message": "No data provided"}, 400

    return create_user(new_user), 201


@users_bp.get("/users")
def get_users_route():
    return get_users()


@users_bp.get("/users/<int:id>")
def get_user_route(id):
    user = get_user(id)

    if user is None:
        return {"message": "User not found"}, 404

    return user, 200


@users_bp.delete("/users/<int:id>")
def delete_user_route(id):
    deleted_user = delete_user(id)

    if deleted_user is None:
        return {"message": "User not found"}, 404

    return deleted_user, 200


@users_bp.put("/users/<int:id>")
def update_user_route(id):
    new_password = request.get_json()

    if new_password is None:
        return {"message": "No data provided"}, 400

    updated_password = update_password(id, new_password)

    if updated_password is None:
        return {"message": "User not found"}, 404

    return updated_password, 200
