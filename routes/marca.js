const router = require('express').Router();
const {createMarca, getMarcas, getMarca, deleteMarca, updateMarca} = require('../controllers/marcasController');
const verifyToken = require('../middleware/verifyToken');

router.post('/', verifyToken, createMarca);

router.get('/', verifyToken ,getMarcas);

router.get('/getOne', verifyToken, getMarca);

router.delete('/', verifyToken, deleteMarca);

router.patch('/', verifyToken, updateMarca);

module.exports = router;