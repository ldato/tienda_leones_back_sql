const db = require("../models");

const create = async (data) => {
    const {nombre} = data;
    const newRole = await db.role.create({
        nombre: nombre
    });
    return newRole;
}

const getAll = async () => {
    const roles = await db.role.findAll();
    return roles;
}

const getOne = async (id) => {
    const role = await db.role.findByPk(id);
    return role;
}

const deleteOne = async (id) => {
    const role = await db.role.destroy({
        where: {
            id: id
        }
    }) 
}

module.exports = {create, getAll, getOne, deleteOne}