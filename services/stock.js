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





module.exports = {initial}