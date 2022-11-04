const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');
const db = require('../models');

const initial = async (data) => {
    const {productoCodigo, talleId, cantidad} = data;
    const stock = await db.productoTalle.create({
        productoCodigo: productoCodigo,
        talleId: talleId,
        cantidad: cantidad
    })
    return stock
}

const getOne = async (codigo) => {
    const stock = await sequelize.query(`SELECT p.productoCodigo, t.nombre, p.cantidad FROM productotalles p
    JOIN talles t ON p.talleId = t.id
    WHERE p.productoCodigo = ${codigo}`, {type: QueryTypes.SELECT});
    return stock
}

const increase = async (productoCodigo, data) => {
    const {talleId, cantidad} = data;
    const codigo = productoCodigo;
    const stockNow = await db.productoTalle.findAll({
        where: {
            productoCodigo: codigo, talleId: talleId
        }
    })
    let newCantidad = stockNow[0].cantidad + cantidad;
    console.log(newCantidad);
    const newStock = await db.productoTalle.update({
        cantidad: newCantidad
    }, {
        where: {productoCodigo: codigo}
    })
    return newStock;
}

const decrese = async (productoCodigo, data) => {
    const {talleId, cantidad} = data;
    const codigo = productoCodigo;
    const stockNow = await db.productoTalle.findAll({
        where: {
            productoCodigo: codigo, talleId: talleId
        }
    })
    let newCantidad = stockNow[0].cantidad - cantidad;
    console.log(newCantidad);
    const newStock = await db.productoTalle.update({
        cantidad: newCantidad
    }, {
        where: {productoCodigo: codigo}
    })
    return newStock;
}





module.exports = {initial, increase, getOne, decrese}