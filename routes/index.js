const router = require('express').Router();
const { role } = require('../models');
const rolesRoutes = require('./roles');
const usersRoutes = require('./user');

router.get('/', async (req, res) => {
    res.status(200).json({
        message: "Ruta Base /api" 
    })
})

router.use('/roles', rolesRoutes);
router.use('/users', usersRoutes);

module.exports = router;