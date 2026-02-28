from config.db import db
class Product(db.Model):
    __tablename__ = 'productos'
    id_producto = db.Column(db.Integer, primary_key=True)
    id_tienda = db.Column(db.Integer, nullable=False)
    id_categoria = db.Column(db.Integer, nullable=False)
    nombre_producto = db.Column(db.String(255), nullable=False)
    precio = db.Column(db.Float, nullable=False)
    stock = db.Column(db.Integer, nullable=False)
    descripcion = db.Column(db.Text, nullable=True)
    estado = db.Column(db.Boolean, default=True)