const router = require('express').Router();
const { role } = require('../models');
const rolesRoutes = require('./roles');
const usersRoutes = require('./user');
const marcasRoutes = require('./marca');

router.get('/', async (req, res) => {
    res.status(200).json({
        message: "Ruta Base /api" 
    })
})

router.use('/roles', rolesRoutes);
router.use('/users', usersRoutes);
router.use('/marcas', marcasRoutes);

module.exports = router;