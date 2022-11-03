const router = require('express').Router();
const {createVenta, getVentasByDni} = require('../controllers/ventasController');

router.post('/', createVenta);

router.get('/:dni', getVentasByDni);

module.exports = router;
