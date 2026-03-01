from flask import Blueprint, jsonify, make_response, request
from flask_cors import cross_origin
from services.auth.auth_services import get_token, login_user, register_user, validate_password
auth_bp = Blueprint('auth', __name__)
@auth_bp.route('/login', methods=['POST'])
@cross_origin()
def login():
    data = request.json
    user = login_user(data['email'], data['password'])
    if request.method == "OPTIONS":
        return make_response("", 200)
    if not user:
        return jsonify ({"error": "Credenciales invalidas"}), 401
    token = get_token(user)
    return jsonify({"token": token}), 200
@auth_bp.route('/register', methods=['POST'])
@cross_origin()
def register():
    data = request.json
    if not validate_password(data['password']):
        print("Contraseña rechazada")
        return jsonify({'error': 'Contraseña insegura'}), 400
    user = register_user (
        nombre = data['nombre'],
        email = data['email'],
        password= data['password'],
        rol = "cliente"
    )
    if not user:
        print("Usuario ya existe")
        return jsonify({"error": "Usuario ya existe"}), 400
    return jsonify({"message": "Registro exitoso"})
@auth_bp.route('/logout', methods=['POST'])
def logout():
    # Lógica de cierre de sesión aquí
    return jsonify({"message": "Logout exitoso"})