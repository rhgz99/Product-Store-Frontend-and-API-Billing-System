from flask import Flask
from .extensions.extensions import cors
from .modules.clients.routes import client_bp
from .modules.products.routes import products_bp


def create_app():
    app = Flask(__name__)
    cors.init_app(app)
    app.register_blueprint(client_bp, url_prefix='/api')
    app.register_blueprint(products_bp, url_prefix='/api')

    return app
