const router = require('express').Router();
const {createTalle, getTalles, getTalle, deleteTalle, updateTalle} = require('../controllers/tallesController');

router.post('/', createTalle);

router.get('/', getTalles);

router.get('/getOne', getTalle);

router.delete('/', deleteTalle);

router.patch('/', updateTalle);

module.exports = router;