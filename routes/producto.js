const router = require('express').Router();
const {createProducto, initialStock, getProductos, getProducto} = require('../controllers/productosController');
const {stockInitial} = require('../controllers/stockController');

router.post('/', createProducto);

router.post('/initial', stockInitial);

router.get('/', getProductos);

router.get('/:codigo', getProducto);

module.exports = router;