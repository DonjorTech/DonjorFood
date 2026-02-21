import express from 'express';
import cors from 'cors';
import productsRoutes from './modules/products/products.routes.js';
import authRoutes from './modules/auth/auth.routes.js';
import usersRoutes from './modules/users/users.routes.js';
import commissionsRoutes from './modules/commissions/commissions.routes.js';
import ordersRoutes from './modules/orders/orders.routes.js';
import storesRoutes from './modules/stores/stores.routes.js';
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/productos', productsRoutes);
app.use('/api/usuarios', usersRoutes);
app.use('/api/comisiones', commissionsRoutes);
app.use('/api/ordenes', ordersRoutes);
app.use('/api/tiendas', storesRoutes);
app.use('/api/login', authRoutes);

module.exports = app;   