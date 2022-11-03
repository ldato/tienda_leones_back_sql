const router = require('express').Router();
const {getStock} = require('../controllers/stockController');

router.get('/getOne/:codigo', getStock);

module.exports = router;