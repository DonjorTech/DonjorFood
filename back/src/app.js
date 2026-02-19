const express = require('express');
const app = express();
app.use(express.json());
app.use(cors());
const productsRoutes = require(".src/modules/products/productos.routes");
const authRoutes = require(".src/modules/products/auth.routes");
const usersRoutes = require(".src/modules/products/users.routes");
const commissionsRoutes = require(".src/modules/products/commissions.routes");
const ordersRoutes = require(".src/modules/products/orders.routes");
const storesRoutes = require(".src/modules/products/stores.routes");
app.use('/api/productos', productsRoutes);
app.use('/api/usuarios', usersRoutes);
app.use('/api/comisiones', commissionsRoutes);
app.use('/api/ordenes', ordersRoutes);
app.use('/api/tiendas', storesRoutes);
app.use('/api/login', authRoutes);

module.exports = app;   