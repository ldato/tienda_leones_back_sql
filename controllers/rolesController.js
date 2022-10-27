const {create, getAll, getOne, deleteOne} = require("../services/role");

const createRole = async (req, res) => {
    try {
        const data = req.body;
        const role = await create(data);
        return res.status(201).json(role);
    } catch (error) {
        return res.status(400).json({
            message: "A ocurrido un error al crear el role",
            error: await error
        })
    }
}

const getRoles = async (req, res) => {
    try {
        const roles = await getAll();
        return res.status(200).json(roles);
    } catch (error) {
        return res.status(400).json({
            message: "A ocurrido un error al consultar los role",
            error: await error
        })
    }
}

const getRole = async (req, res) => {
    const {id} = req.params
    try {
        const role = await getOne(id);
        if (!role) {
            return res.status(404).json({
                message: "No se encontro el role con el id enviado"
            })
        }
        return res.status(200).json(role);
    } catch (error) {
        return res.status(400).json({
            message: "A ocurrido un error al consultar el role",
            error: await error
        })
    }
}

const deleteRole = async (req, res) => {
    const {id} = req.params;
    try {
        const role = await deleteOne(id);
        return res.status(200).json(role);
    } catch (error) {
        return res.status(400).json({
            message: "A ocurrido un error al consultar el role",
            error: await error
        })
    }
}

module.exports = {createRole, getRoles, getRole, deleteRole}