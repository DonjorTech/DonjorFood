import jwt from 'jsonwebtoken';
const jwt = require('jsonwebtoken');
exports.login = async (data) => {
    const {email, password} = data;
    const user = await findUserByEmail(email);
    if (!user) {
        throw new Error('Usuario no encontrado');
    }
    const isValid = password === user.password; // En producción, usar bcrypt para comparar hashes
    if (!isValid) {
        throw new Error('Contraseña incorrecta');
    }
    const token = jwt.sign(
        {
            id: user.id,
            role: user.role
        }, 
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    )
    return token;
};