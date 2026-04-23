import os
from flask import Flask
from flask_cors import CORS
from app.modules.users.routes import users_bp
from app.modules.products.routes import products_bp
from app.modules.carts.routes import carts_bp
from app.modules.auth.routes import auth_bp


def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/api/*": {"origins": os.getenv("FRONTEND_URL")}})
    app.register_blueprint(users_bp, url_prefix="/api")
    app.register_blueprint(products_bp, url_prefix="/api")
    app.register_blueprint(carts_bp, url_prefix="/api")
    app.register_blueprint(auth_bp, url_prefix="/api")
    print("FRONTEND_URL:", os.environ.get("FRONTEND_URL"))
    return app
