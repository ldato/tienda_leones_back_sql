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

const increase = async (data) => {
    const {productoCodigo, talleId, cantidad} = data;
    const stockNow = await db.productoTalle.findAll({
        where: {
            [Op.and]: [{productoCodigo: productoCodigo}, {talleId: talleId}]
        }
    })
    return stockNow
}





module.exports = {initial, increase, getOne}