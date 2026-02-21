exports.getAll = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM products');
        return rows;
    } catch (error){
        console.error(error);
        resizeBy.status(500).json({error: 'Error en la base de datos'});
    }
};

