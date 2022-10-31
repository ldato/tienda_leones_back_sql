const {create, getAll, getOne} = require('../services/producto');
const {initial} = require('../services/stock');


const createProducto = async (req, res) => {
    const productoData = req.body;
    try {
        const producto = await create(productoData);
        return res.status(201).json(producto);
    } catch (error) {
        return res.status(401).json({
            message: "Ha ocurrido un error al crear el peoducto",
            error: error
        })
    }
}

const getProductos = async (req, res) => {
    try {
        const productos = await getAll();
        if (!productos) {
            return res.status(404).json({
                message: "No se encontro ningun producto"
            })
        }
        return res.status(200).json(productos);
    } catch (error) {
        return res.status(401).json({
            message: "A ocurrido un error al consultar los productos",
            error: error
        })
    }
}

const getProducto = async (req, res) => {
    const {codigo} = req.params;
    try {
        const producto = await getOne(codigo);
        if (!producto) {
            return res.status(404).json({
                message: "No existe un producto con el codigo enviado"
            })
        }
        return res.status(200).json(producto);
    } catch (error) {
        return res.status(401).json({
            message: "A ocurrido un error al consultar el producto",
            error: error
        })
    }
}

const initialStock = async (req, res) => {
    const stockData = req.body;
    try {
        const increaseProd = await initial(stockData);
        return res.status(201).json(increaseProd);
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            message: "Ha ocurrido un error al incrementar el stock",
            error: error
        })
    }    
}

module.exports = {createProducto, initialStock, getProductos, getProducto}