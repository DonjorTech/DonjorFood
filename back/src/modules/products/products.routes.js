import express from 'express';
import { getAllProducts } from './products.controller.js';
const router = express.Router();
router.get('/',  getAllProducts);
export default router;
