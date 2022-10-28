const db = require('../models');

const create = async (data) => {
    const {dni, nombre, apellido, telefono, email} = data;
    const cliente = await db.cliente.create({
        dni: dni,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email:email
    });
    return cliente
}

const getAll = async () => {
    const clientes = db.cliente.findAll();
    return clientes;
}

const getOne = async (dni) => {
    const cliente = await db.cliente.findOne({where: {dni:dni}});
    return cliente;
}

const deleteOne = async (dni) => {
    const cliente = await db.cliente.destroy({where: {dni: dni}});
    return cliente;
}

const updateOne = async (data, dni) => {
    const {nombre, apellido, telefono, email} = data;
    const cliente = await db.cliente.update({
        nombre: nombre,
        apellido:apellido,
        telefono:telefono,
        email: email
    },
    {
        where:{dni:dni}
    });
    return cliente;
}



module.exports = {create, getAll, deleteOne, getOne, updateOne}