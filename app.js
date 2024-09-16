const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const airplaneRoutes = require('./routes/airplaneRoutes');
const payRoutes= require('./routes/payRoutes')
const quoteRoutes= require('./routes/quoteRoutes')
const ticketRoutes= require('./routes/ticketRoutes')

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/api', userRoutes);
app.use('/api', airplaneRoutes);
app.use('/api', payRoutes);
app.use('/api', quoteRoutes);
app.use('/api', ticketRoutes);

module.exports = app;
