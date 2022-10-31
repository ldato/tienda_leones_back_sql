const router = require('express').Router();
const {createVenta} = require('../controllers/ventasController');

router.post('/', createVenta);

module.exports = router;
