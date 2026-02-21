import productsServices from './products.service.js';
exports.getAllProducts = async (res, req) => {
    try {
        const products = await productsServices.geatALL();
            res.json(products);
    } catch {
        res.status(500).json({message: 'Error al cargar productos   '})
    }
};
exports.Delete = async ()