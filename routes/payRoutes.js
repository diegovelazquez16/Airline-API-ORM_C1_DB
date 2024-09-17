const express = require('express');
const router = express.Router();
const payController = require('../controllers/payController');

router.post('/pay', payController.addPay);
router.get('/pay', payController.getAllPay);
router.get('/pay/:id', payController.getPayById);

module.exports = router;