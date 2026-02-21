import db from '../../config/db.js';
export const productsService = async () => {
    getAll: async () => {
        try {
            const [rows] = await db.query('SELECT * FROM products');
            return rows;
        } catch (error){
            console.error(error);
            throw new Error('Error en la base de datos');
        }
    }
};

