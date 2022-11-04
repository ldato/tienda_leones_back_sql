const router = require('express').Router();
const {getStock, increseStock, decreseStock} = require('../controllers/stockController');

router.get('/getOne/:codigo', getStock);

router.patch('/increase/:codigo', increseStock);

router.patch('/decrese/:codigo', decreseStock);

module.exports = router;