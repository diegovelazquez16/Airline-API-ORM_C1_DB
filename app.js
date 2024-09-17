const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const airplaneRoutes = require('./routes/airplaneRoutes');
const bookRoutes = require('./routes/bookRoutes');
const databankRoutes = require('./routes/databankRoutes');
const passengerRoutes = require('./routes/pasangerRoutes');


const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/api', userRoutes);
app.use('/api', airplaneRoutes);
app.use('/api',bookRoutes);
app.use('/api',databankRoutes);
app.use('/api', passengerRoutes);


module.exports = app;
