import jwt
from models.users import User
from config.db import db
from flask import current_app
import datetime
from config.db import bcrypt
def login_user (email, password):
    user = User.query.filter_by(email = email).first()
    if not user:
        return None
    if not bcrypt.check_password_hash(user.password_hash, password):
        return None
    return user
def register_user(nombre, email, password, rol):
    if User.query.filter_by(email=email).first():
        return None

    password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    new_user = User(
        nombre=nombre,
        email=email,
        password_hash=password_hash,
        rol=rol
    )

    db.session.add(new_user)
    db.session.commit()

    return new_user
def validate_password(password):
    if len(password) < 8:
        return False
    if not any(char.isdigit() for char in password):
        return False
    if not any(char.isalpha() for char in password):
        return False
    return True
def get_token(user):
    payload = {
        'id_usuario': user.id_usuario,
        'nombre': user.nombre,
        'email': user.email,
        'rol': user.rol,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24)
    }
    token = jwt.encode(payload, current_app.config['JWT_SECRET_KEY'], algorithm='HS256')
    return token
def validate_role(user, required_role):
    return user.rol == required_role
def validate_token(token):
    try:
        payload = jwt.decode(token, current_app.config['JWT_SECRET_KEY'], algorithms=['HS256'])
        user = User.query.get(payload['id_usuario'])
        return user
    except Exception as e:
        print(f"Error al validar token: {e}")
        return None