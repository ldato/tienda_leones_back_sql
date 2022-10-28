const router = require('express').Router();
const { role } = require('../models');
const rolesRoutes = require('./roles');
const usersRoutes = require('./user');
const marcasRoutes = require('./marca');
const proveedoresRoutes = require('./proveedor');
const clientesRoutes = require('./cliente');
const tallesRoutes = require('./talle');
const { Router } = require('express');

router.get('/', async (req, res) => {
    res.status(200).json({
        message: "Ruta Base /api" 
    })
})

router.use('/roles', rolesRoutes);
router.use('/users', usersRoutes);
router.use('/marcas', marcasRoutes);
router.use('/proveedores', proveedoresRoutes);
router.use('/clientes', clientesRoutes);
router.use('/talles', tallesRoutes);

module.exports = router;