const router = require('express').Router();
const {createVenta, getVentasByDni, getVentasByCodigo} = require('../controllers/ventasController');

router.post('/', createVenta);

router.get('/:dni', getVentasByDni);

router.get('/getByCodigo/:codigo', getVentasByCodigo);

module.exports = router;
