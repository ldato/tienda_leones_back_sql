const { v4: uuidv4 } = require('uuid');
const { sequelize } = require('../models');
const db = require('../models');
const { QueryTypes } = require('sequelize');

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

const getByDni = async (dni) => {
    console.log(dni)
    const ventas = await sequelize.query(`SELECT v.idVenta, c.nombre, c.apellido, m.nombre AS marca,
	d.cantidad, d.precioUnitario, d.subtotal as subtotal_producto, d.createdAt, p.descripcion
    FROM clientes c 
    JOIN venta v ON c.dni = v.clienteDni
    JOIN detalleventa d ON v.idVenta = d.idVenta
    JOIN productos p ON p.codigo = d.productoCodigo 
    JOIN marcas m ON p.idMarca = m.id 
    WHERE c.dni = ${dni};`, {type: QueryTypes.SELECT});
    console.log(ventas)
    return ventas;
}

const getByCodigo = async (codigo) => {
    const ventas = await sequelize.query(`SELECT p.descripcion, v.createdAt, d.precioUnitario, m.nombre AS marca, d.cantidad, c.nombre, c.apellido
    FROM productos p 
    JOIN detalleventa d ON p.codigo = d.productocodigo 
    JOIN venta v ON d.idVenta = v.idVenta
    JOIN clientes c ON v.clienteDni = c.dni
    JOIN marcas m ON p.idMarca = m.id
    WHERE p.codigo = ${codigo};`, {type: QueryTypes.SELECT});
    return ventas
} 

module.exports = {create, getByDni, getByCodigo}

