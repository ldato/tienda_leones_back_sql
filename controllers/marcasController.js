const {create, getAll, getOne, deleteOne, updateOne} = require('../services/marca');

const createMarca = async (req, res) => {
    const data = req.body;
    try {
        const marca = await create(data);
        return res.status(201).json(marca);
    } catch (error) {
        return res.status(400).json({
            message: "A ocurrido un error al crear la marca",
            error: await error
        })
    }
}

const getMarcas = async (req, res) => {
    try {
        const marcas = await getAll();
        if (!marcas) {
            return res.status(404).json({
                message: "No se encontro ninguna marca"
            })
        }
        return res.status(200).json(marcas);
    } catch (error) {
        return res.status(400).json({
            message: "A ocurrido un error al consultar las marcas",
            error: await error
        })
    }
}

const getMarca = async (req, res) => {
    const {nombre} = req.body;
    try {
        const marca = await getOne(nombre);
        if (!marca) {
            return res.status(404).json({
                message: "No se encontro la marca consultada"
            })
        }
        return res.status(200).json(marca);
    } catch (error) {
        return res.status(400).json({
            message: "A ocurrido un error al consulta la marca",
            error: await error
        })
    }
}

const deleteMarca = async (req, res) => {
    const {nombre} = req.body;
    try {
        const marca = await deleteOne(nombre);
        if (!marca) {
            return res.status(404).json({
                message: "No se encontro la marca que quiere eliminar"
            })
        }
        return res.status(200).json({
            message: `La marca ${nombre} ha sido eliminada correctamente`
        })
    } catch (error) {
        return res.status(400).json({
            message: "A ocurrido un error al consulta la marca",
            error: await error
        })
    }
}

const updateMarca = async (req, res) => {
    const data = req.body;
    try {
        const marca = await updateOne(data);
        console.log(marca);
        if (marca===[0]) {
            return res.status(404).json({
                message: "No se encontro la marca que quiere modificar"
            })
        }
        return res.status(200).json({
            message: `La marca ${data.nuevoNombre} ha sido modificada correctamente`
        })
    } catch (error) {
        return res.status(400).json({
            message: "A ocurrido un error al modificar la marca",
            error: await error
        })
    }
}

module.exports = {createMarca, getMarcas, getMarca, deleteMarca, updateMarca}