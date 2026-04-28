from flask import Blueprint, request
from .services import login_user, register_user

auth_bp = Blueprint("auth", __name__)


@auth_bp.post("/auth/register")
def register_route():
    try:
        register_data = request.get_json()
        username = register_data.get("username")
        email = register_data.get("email")
        password = register_data.get("password")

        if not username or not email or not password:
            return {"message": "Missing Fields"}, 400

        user = register_user(username, email, password)

        return user, 201
    except Exception as e:
        return {'message': str(e)}, 400



@auth_bp.post("/auth/login")
def login_route():
    login_data = request.get_json()
    email = login_data.get("email")
    password = login_data.get("password")

    if not email or not password:
        return {"message": "email and password are required"}, 400

    token = login_user(email, password)

    if not token:
        return {"message": "Invalid credentials"}, 401

    return token, 200
