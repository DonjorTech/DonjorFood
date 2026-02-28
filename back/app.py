import os
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from config.db import db
from routes.users.users_routes import users_bp
from routes.products.products_routes import products_bp
load_dotenv()
app = Flask(__name__)
@app.route('/')
def home():
    return "Bienvenido a la API de Donjor Food"
CORS(app)
def create_app():
    app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+mysqlconnector://{os.getenv('DB_USER')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_NAME')}"
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    return app
if __name__ == '__main__':
    app = create_app()

    app.register_blueprint(users_bp, url_prefix='/api/usuarios')
    app.register_blueprint(products_bp, url_prefix='/api/productos')

    print(app.url_map)
    app.run(debug=True)





