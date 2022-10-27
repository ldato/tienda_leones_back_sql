const {create, getOne, getAll, deleteOne} = require('../services/user');

const createUser = async (req, res) => {
    const userData = req.body;
    try {
        const newUser = await create(userData);
        return res.status(201).json({
            message: "El usuario ha sido creado exitosamente",
            user: newUser
        })
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: "Ha ocurrido un error al crear el usuario",
            error: error
        })
    }
}

const findUser = async (req, res) => {
    const {username} = req.body;
    try {
        const user = await getOne(username);
        if (!user) {
            return res.status(404).json({
                message: "No se encontro el usuario con el username enviado"
            })
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(401).json({
            message: "Ha ocurrido un error al consultar el usuario",
            error: error
        })
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await getAll();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(401).json({
            message: "Ha ocurrido un error al consultar el usuario",
            error: error
        })
    }
}

const deleteUser = async (req, res) => {
    const {username} = req.body;
    try {
        const user = await deleteOne(username);
        if (!user) {
            return res.status(404).json({
                message: "No se encontro el usuario con el username enviado"
            })
        }
        return res.status(200).json({
            message: `El usuario ${username} fue eliminado`
        });
    } catch (error) {
        return res.status(401).json({
            message: "Ha ocurrido un error al borrar el usuario",
            error: error
        })
    }
}


module.exports = {createUser, findUser, getUsers, deleteUser}