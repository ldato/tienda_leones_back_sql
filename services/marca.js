const db = require('../models');

const create = async (data) => {
    const {nombre} = data;
    const marca = await db.marca.create({
        nombre: nombre
    });
    return marca;
}

const getAll = async () => {
    const marcas = await db.marca.findAll();
    return marcas;
}

const getOne = async(nombre) => {
    const marca = await db.marca.findOne({where: {nombre: nombre}});
    return marca;
}

const deleteOne = async (nombre) => {
    const marca = await db.marca.destroy({where:{nombre:nombre}});
    return marca;
}

const updateOne = async (data) => {
    const {nombre, nuevoNombre} = data;
    const marca = await db.marca.update({nombre: nuevoNombre}, {where: {nombre:nombre}});
    return marca;
}

module.exports = {create, getAll, getOne, deleteOne, updateOne}