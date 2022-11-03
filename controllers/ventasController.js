const {create, getByDni} = require('../services/venta');

const createVenta = async (req, res) => {
    const data = req.body;
    try {
        const venta = await create(data);
        return res.status(201).json(venta);
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            message: "Ha ocurrido un error al crear la venta",
            error: error
        })
    }    
}

const getVentasByDni = async (req, res) => {
    const {dni} = req.params;
    try {
        const ventas = await getByDni(dni);
        if (ventas.length === 0) {
            return res.status(404).json({
                message: `No se encontraron ventas para el DNI: ${dni}`
            })
        }

        return res.status(200).json(ventas);
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            message: "Ha ocurrido un error al consultar las ventas por DNI",
            error: error
        })
    }
}

module.exports = {createVenta, getVentasByDni}