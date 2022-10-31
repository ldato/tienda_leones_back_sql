const { v4: uuidv4 } = require('uuid');
const db = require('../models');

const create = async (data) => {
    let idVenta = "";
    idVenta = uuidv4();
    console.log(idVenta);
    let objVenta = [];
    for (let i = 0; i < data.items.length; i++) {
        let item = {
            idVenta: idVenta,
            cantidad: data.items[i].cantidad,
            productoCodigo: data.items[i].productoCodigo,
            clienteDni: data.clienteDni,
            precioUnitario: data.items[i].precioUnitario,
            subTotal: data.items[i].precioUnitario * data.items[i].cantidad
        }
        objVenta.push(item);      
    }
    console.log(objVenta)
    const venta = await db.venta.bulkCreate(objVenta);
    return venta;
}

module.exports = {create}

