const db = require('../models');

const create = async (data) => {
    const {nombre} = data;
    const talle = await db.talle.create({
        nombre: nombre
    });
    return talle;
}

const getAll = async () => {
    const talles = await db.talle.findAll();
    return talles;
}

const getOne = async(nombre) => {
    const talle = await db.talle.findOne({where: {nombre: nombre}});
    return talle;
}

const deleteOne = async (nombre) => {
    const talle = await db.talle.destroy({where:{nombre:nombre}});
    return talle;
}

const updateOne = async (data) => {
    const {nombre, nuevoNombre} = data;
    const talle = await db.talle.update({nombre: nuevoNombre}, {where: {nombre:nombre}});
    return talle;
}

module.exports = {create, getAll, getOne, deleteOne, updateOne}