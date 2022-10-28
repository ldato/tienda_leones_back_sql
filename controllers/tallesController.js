const {create, getAll, getOne, deleteOne, updateOne} = require('../services/talle');

const createTalle = async (req, res) => {
    const data = req.body;
    try {
        const talle = await create(data);
        return res.status(201).json(talle);
    } catch (error) {
        return res.status(400).json({
            message: "A ocurrido un error al crear talle",
            error: await error
        })
    }
}

const getTalles = async (req, res) => {
    try {
        const talles = await getAll();
        if (!talles) {
            return res.status(404).json({
                message: "No se encontro ningun talle"
            })
        }
        return res.status(200).json(talles);
    } catch (error) {
        return res.status(400).json({
            message: "A ocurrido un error al consultar los talles",
            error: await error
        })
    }
}

const getTalle = async (req, res) => {
    const {nombre} = req.body;
    try {
        const talle = await getOne(nombre);
        if (!talle) {
            return res.status(404).json({
                message: "No se encontro el talle consultado"
            })
        }
        return res.status(200).json(talle);
    } catch (error) {
        return res.status(400).json({
            message: "A ocurrido un error al consulta el talle",
            error: await error
        })
    }
}

const deleteTalle = async (req, res) => {
    const {nombre} = req.body;
    try {
        const talle = await deleteOne(nombre);
        if (!talle) {
            return res.status(404).json({
                message: "No se encontro el talle que quiere eliminar"
            })
        }
        return res.status(200).json({
            message: `El talle ${nombre} ha sido eliminada correctamente`
        })
    } catch (error) {
        return res.status(400).json({
            message: "A ocurrido un error al eliminar el talle",
            error: await error
        })
    }
}

const updateTalle = async (req, res) => {
    const data = req.body;
    try {
        const talle = await updateOne(data);
        console.log(marca);
        if (talle===0) {
            return res.status(404).json({
                message: "No se encontro el talle que quiere modificar"
            })
        }
        return res.status(200).json({
            message: `El talle ${data.nuevoNombre} ha sido modificada correctamente`
        })
    } catch (error) {
        return res.status(400).json({
            message: "A ocurrido un error al modificar el talle",
            error: await error
        })
    }
}

module.exports = {createTalle, getTalles, getTalle, deleteTalle, updateTalle}