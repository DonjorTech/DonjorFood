from flask import Blueprint, jsonify
from config.db import db
from models.products import Product
products_bp = Blueprint('products', __name__)
@products_bp.route('/', methods=['GET'])
def getproducts():
    products = Product.query.all()
    return jsonify([{
        'id_producto': product.id_producto,
        'id_tienda': product.id_tienda,
        'id_categoria': product.id_categoria,
        'nombre_producto': product.nombre_producto,
        'precio': product.precio,
        'stock': product.stock,
        'descripcion': product.descripcion,
        'estado': product.estado
    } for product in products])
