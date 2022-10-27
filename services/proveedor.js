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

module.exports = {create}