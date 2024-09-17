const express = require('express');
const router = express.Router();
const passengerController = require('../controllers/pasangerController');

router.post('/passengers', passengerController.createPassenger);
router.get('/passengers', passengerController.getAllPassengers);
router.get('/passengers/:id', passengerController.getPassengerById);
router.put('/passengers/:id', passengerController.updatePassenger);
router.delete('/passengers/:id', passengerController.deletePassenger);

module.exports = router;
