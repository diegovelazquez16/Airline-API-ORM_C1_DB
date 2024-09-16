const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');

router.post('/quote', quoteController.getQuote);
router.get('/quote', quoteController.getAllQuotes);
router.delete('/quote/:id', quoteController.deleteQuote);

module.exports = router;