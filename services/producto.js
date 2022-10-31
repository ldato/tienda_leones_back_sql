const db = require('../models');

const create = async (data) => {
    const {codigo, idMarca, idProveedor, descripcion, precioCosto, precioVenta} = data;
    const producto = await db.producto.create({
        codigo: codigo,
        idMarca: idMarca,
        idProveedor: idProveedor,
        descripcion: descripcion,
        precioCosto: precioCosto,
        precioVenta: precioVenta
    });
    return producto
}

const getAll = async () => {
    const productos = await db.producto.findAll();
    return productos;
}

const getOne = async (codigo) => {
    const producto = await db.producto.findOne({where: {codigo: codigo}});
    return producto;
}

module.exports = {create, getAll, getOne}