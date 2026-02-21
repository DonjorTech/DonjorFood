import {productsService} from './products.service.js';
export  const getAllProducts = async (req, res) => {
    try {
        const products = await productsService.getAll();
            res.json(products);
    } catch (error) {
        res.status(500).json({message: 'Error al cargar productos   '})
    }
};
