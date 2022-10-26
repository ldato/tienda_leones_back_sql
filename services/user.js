const db = require('../models');
const bcrypt = require('bcrypt');
const salt = 10;

const create = async (data) => {
    console.log(data)
    const {username, password, nombre, apellido, roleId} = data;
    const hashPassword = await bcrypt.hash(password, salt);
    const user = await db.user.create({
        username: username,
        password: hashPassword,
        nombre: nombre,
        apellido: apellido,
        roleId: roleId
    })
    return user;
}

const getOne = async (username) => {
    const user = await db.user.findOne({where: {username: username}});
    return user; 
}

const getAll = async () => {
    const users = await db.user.findAll();
    return users;
}

const deleteOne = async (username) => {
    const user = await db.user.destroy({where: {username: username}});
    return user;
}

module.exports = {create, getOne, getAll, deleteOne}