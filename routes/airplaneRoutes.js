const express = require('express');
const router = express.Router();
const airplaneController = require('../controllers/airplaneController');

router.post('/airplanes', airplaneController.createAirplane);
router.get('/airplanes', airplaneController.getAllAirplanes);
router.get('/airplanes/:id', airplaneController.getAirplaneById);
router.put('/airplanes/:id', airplaneController.updateAirplane);
router.delete('/airplanes/id', airplaneController.deleteAirplane);

module.exports = router;