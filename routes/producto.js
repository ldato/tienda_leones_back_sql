const router = require('express').Router();
const {createProducto, initialStock, getProductos, getProducto} = require('../controllers/productosController');

router.post('/', createProducto);

router.post('/initial', initialStock);

router.get('/', getProductos);

router.get('/:codigo', getProducto);

module.exports = router;