const {create} = require('../services/venta');

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

module.exports = {createVenta}