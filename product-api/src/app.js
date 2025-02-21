const express = require('express');

const errorHandler = require('./middlewares/errorHandler');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use(errorHandler);

module.exports = app;
