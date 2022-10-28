const router = require('express').Router();
const {createCliente, getClientes, deleteCliente, getCliente, updateCliente} = require('../controllers/clientesController');

router.post('/', createCliente);

router.get('/', getClientes);

router.get('/:dni', getCliente);

router.delete('/:dni', deleteCliente); 

router.put('/:dni', updateCliente);

module.exports = router;