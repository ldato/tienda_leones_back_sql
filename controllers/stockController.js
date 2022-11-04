const {initial,increase, getOne, decrese} = require('../services/stock');

const stockInitial = async (req, res) => {
    const data = req.body;
    try {
        const stock = await initial(data);
        return res.status(201).json(stock);
    } catch (error) {
        return res.status(404).json({
            message: "A ocurrido un error al crear el stock inicial",
            error: error
        })
    }
}

const getStock = async (req, res) => {
    const {codigo} = req.params;
    try {
        const stock = await getOne(codigo)
        if (stock.length === 0) {
            return res.status(404).json({
                message: "No se pudo encontrar el stock para codigo enviado"
            })
        }
        return res.status(200).json(stock)
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message: "A ocurrido un error al crear el stock inicial",
            error: error
        })
    }
}

const increseStock = async (req, res) => {
    const data = req.body;
    const {codigo} = req.params;
    try {
        const stock = await increase(codigo, data);
        return res.status(201).json(stock);
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message: "A ocurrido un error al crear el stock inicial",
            error: error
        })
    }        
}

const decreseStock = async (req, res) => {
    const data = req.body;
    const {codigo} = req.params;
    try {
        const stock = await decrese(codigo, data);
        return res.status(201).json(stock);
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message: "A ocurrido un error al crear el stock inicial",
            error: error
        })
    }     
}

module.exports = {stockInitial, getStock, increseStock, decreseStock}