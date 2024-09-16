const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

router.post('/ticket', ticketController.getTicket);
router.get('/ticket', ticketController.getAllTickets);
router.get('/ticket/:id', ticketController.getTicketByPassenger);

module.exports = router;