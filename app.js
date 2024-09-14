const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const airplaneRoutes = require('./routes/airplaneRoutes');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/api', userRoutes);
app.use('/api', airplaneRoutes);

module.exports = app;
