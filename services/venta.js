const { v4: uuidv4 } = require('uuid');
const db = require('../models');

const create = async (data) => {
    let idVenta = uuidv4();
    let respuesta = [];
    let objInsertDetalle = []
    const insertVenta = await db.venta.create({
        idVenta: idVenta,
        clienteDni: data.clienteDni,
        total: data.total
    });
    respuesta.push(insertVenta);
    for (let i = 0; i < data.items.length; i++) {
        let insert = {
            idVenta: idVenta,
            productoCodigo: data.items[i].codigo,
            cantidad: data.items[i].cantidad,
            precioUnitario: data.items[i].precio,
            subtotal: data.items[i].subtotal
        }
        objInsertDetalle.push(insert)
    }
    console.log(objInsertDetalle);
    const detalle = await db.detalleVenta.bulkCreate(objInsertDetalle);
    respuesta.push(detalle);
    return respuesta;
}

module.exports = {create}

