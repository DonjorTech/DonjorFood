import express from 'express';
import productsController from './products.controller.js';
export const router = express.Router();
router.get('/', productsController.getAllProducts);
export default router;
