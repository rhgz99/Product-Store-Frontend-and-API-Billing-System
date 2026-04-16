from flask import Blueprint, request
from .services import create_user, get_users, get_user, delete_user, update_password

users_bp = Blueprint("users", __name__)

@users_bp.post('/users')
def create_user_route():
    new_user = request.get_json()
    return create_user(new_user), 201

@users_bp.get('/users')
def get_users_route():
    return get_users()

@users_bp.get('/users/<id>')
def get_user_route(id):
    return get_user(id)

@users_bp.delete('/users/<id>')
def delete_user_route(id):
    return delete_user(id)
    

@users_bp.put('/users/<id>')
def update_user_route(id):
    new_password = request.get_json()
    return update_password(id, new_password)
