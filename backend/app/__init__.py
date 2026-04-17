from flask import Flask
from app.extensions.extensions import cors
from app.modules.users.routes import users_bp
from app.modules.products.routes import  products_bp


def create_app():
    app = Flask(__name__)
    cors.init_app(app)
    app.register_blueprint(users_bp, url_prefix="/api")
    app.register_blueprint(products_bp, url_prefix='/api')

    return app
