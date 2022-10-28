const router = require('express').Router();
const {createProveedor, getProveedores, getProveedor, deleteProveedor, updateProveedor} = require('../controllers/proveedoresController');

router.post('/', createProveedor);

router.get('/', getProveedores);

router.get('/getOne', getProveedor);

router.delete('/', deleteProveedor);

router.put('/', updateProveedor);

module.exports = router;