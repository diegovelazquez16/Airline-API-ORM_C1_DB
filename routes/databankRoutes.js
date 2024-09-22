const express = require('express');
const router = express.Router();
const databankController = require('../controllers/databankController');

router.post('/databanks', databankController.createDataBank);
router.get('/databanks', databankController.getAllDataBanks);
router.get('/databanks/:id', databankController.getDataBankById);
router.put('/databanks/:id', databankController.updateDataBank);
router.delete('/databanks/:id', databankController.deleteDataBank);

module.exports = router;
