const db = require('../models');

const create = async (data) => {
    const {nombre, telefono, email} = data;
    const proveedor = await db.proveedor.create({
        nombre: nombre,
        telefono: telefono,
        email: email
    })
    return proveedor;
}

const getAll = async () => {
    const proveedores = await db.proveedor.findAll();
    return proveedores;
}

const getOne = async (nombre) => {
    const proveedor = await db.proveedor.findOne({where: {nombre:nombre}});
    return proveedor;
}

const deleteOne = async (nombre) => {
    const proveedor = await db.proveedor.destroy({where: {nombre:nombre}});
    return proveedor;
}

const updateOne = async (data) => {
    const {nombre, telefono, email} = data;
    const proveedor = await db.proveedor.update({
        nombre: nombre,
        telefono: telefono,
        email:email
    },
    {
        where: {nombre: nombre}
    });
    return proveedor;
}

module.exports = {create, getAll, getOne, deleteOne, updateOne}