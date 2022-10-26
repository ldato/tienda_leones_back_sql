const router = require('express').Router();
const {createUser, findUser, getUsers, deleteUser} = require('../controllers/usersController');
const {loginUser} = require('../controllers/authController');

router.post('/', createUser);

router.get('/getOne', findUser);

router.get('/', getUsers);

router.delete('/', deleteUser);

router.get('/login', loginUser);

module.exports = router;