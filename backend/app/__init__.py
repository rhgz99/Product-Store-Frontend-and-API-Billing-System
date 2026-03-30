from flask import Flask
from flask_cors import CORS
from .clients.client_routes import client_bp
from .products.products_routes import products_bp


def create_app():
    app = Flask(__name__)
    CORS(app)
    app.register_blueprint(client_bp, url_prefix='/api')
    app.register_blueprint(products_bp, url_prefix='/api')

    return app
