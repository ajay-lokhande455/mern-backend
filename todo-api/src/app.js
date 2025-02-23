const express = require('express');
const todosRoute = require('../src/routes/todosRoutes');
const errorHandler = require('./middlewares/errorHandler');


const app = express();

app.use(express.json());
app.use('/todos', todosRoute);
app.use(errorHandler);

module.exports = app;
