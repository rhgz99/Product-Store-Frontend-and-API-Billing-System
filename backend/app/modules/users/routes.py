from flask import Blueprint, request
from .services import  get_users, get_user, delete_user, update_password
from app.middlewares.auth_middleware import token_required

users_bp = Blueprint("users", __name__)


@users_bp.get("/users")
@token_required
def get_users_route():
    return get_users(), 200


@users_bp.get("/users/me")
@token_required
def get_user_route():
    user_id = request.user_id
    user = get_user(user_id)

    if not user:
        return {"message": "User not found"}, 404

    return user, 200


@users_bp.delete("/users/me")
@token_required
def delete_user_route():
    user_id = request.user_id
    deleted_user = delete_user(user_id)

    if not deleted_user:
        return {"message": "User not found"}, 404

    return deleted_user, 200


@users_bp.put("/users/me/password")
def update_user_route():
    user_id = request.user_id
    new_password = request.get_json()

    if not new_password:
        return {"message": "No data provided"}, 400

    updated_password = update_password(user_id, new_password)

    if not updated_password:
        return {"message": "User not found"}, 404

    return updated_password, 200
