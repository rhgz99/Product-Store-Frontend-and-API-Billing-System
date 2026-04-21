import jwt
from functools import wraps
from flask import request
from app.modules.auth.services import decode_token


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth_header = request.headers.get("Authorization")

        if not auth_header:
            return {"message": "Token is missing"}, 401

        try:
            token = auth_header.split(" ")[1]
        except IndexError:
            return {"message": "Invalid token format"}, 401

        try:
            payload = decode_token(token)
            request.user_id = payload.get("user_id")
        except jwt.ExpiredSignatureError:
            return {"message": "Token expired"}, 401
        except jwt.InvalidTokenError:
            return {"message": "Invalid token"}, 401

        return f(*args, **kwargs)

    return decorated
