const router = require('express').Router();
const {createMarca, getMarcas, getMarca, deleteMarca, updateMarca} = require('../controllers/marcasController');

router.post('/', createMarca);

router.get('/', getMarcas);

router.get('/getOne', getMarca);

router.delete('/', deleteMarca);

router.patch('/', updateMarca);

module.exports = router;