const db = require('../models');
const {create, getAll, deleteOne, getOne, updateOne} = require('../services/cliente');


const createCliente = async (req, res) => {
    const clienteData = req.body;
    try {
        const cliente = await create(clienteData);
        return res.status(201).json(cliente);
    } catch (error) {
        return res.status(401).json({
            message: "Ha ocurrido un error al crear el cliente",
            error: error
        })
    }
}

const getClientes = async (req, res) => {
    try {
        const clientes = await getAll();
        if (!clientes) {
            return res.status(404).json({
                message: "No hay clientes en la BBDD"
            })
        }
        return res.status(200).json(clientes);
    } catch (error) {
        return res.status(401).json({
            message: "Ha ocurrido un error al consultar los clientes",
            error: error
        })
    }
}



const deleteCliente = async (req, res) => {
    const {dni} = req.params;
    console.log(dni);
    try {
        const clienteDeleted = await deleteOne(dni);
        if (clienteDeleted===1) {
            return res.status(200).json({
                message: `El cliente con dni: ${dni} fue eliminado correctamente` 
            })
        }
        if (clienteDeleted===0) {
            return res.status(200).json({
                message: `No se encontro un cliente con dni: ${dni} ` 
            })
        }
      
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: "Ha ocurrido un error al eliminar el clientes",
            error: error
        })
    }
}

const getCliente = async (req, res) => {
    const {dni} = req.params;
    try {
        const cliente = await getOne(dni);
        if (!cliente) {
            return res.status(404).json({
                message: `No se encontro un cliente con el dni: ${dni}`
            })
        }
        return res.status(200).json(cliente);
    } catch (error) {
        return res.status(401).json({
            message: "Ha ocurrido un error al consultar el cliente",
            error: error
        })
    }    
}

const updateCliente = async (req, res) => {
    const data = req.body;
    const {dni} = req.params;
    try {
        const cliente = await getOne(dni);
        console.log(cliente);
        if (!cliente) {
            return res.status(404).json({
                message: `No se encontro un cliente con el dni: ${dni}`
            })
        }
        let objCliente = {
            nombre: data.nombre===null || data.nombre===undefined ? cliente.nombre : data.nombre,
            apellido: data.apellido===null || data.apellido===undefined ? cliente.apellido : data.apellido,
            telefono : data.telefono===null || data.telefono===undefined ? cliente.telefono : data.telefono,
            email: data.email===null || data.email===undefined ? cliente.email : data.email
        }

        const clienteUpdated = await updateOne(objCliente, dni);
        return res.status(200).json(clienteUpdated);
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: "Ha ocurrido un error al actualizar el cliente",
            error: error
        })
    }
}

module.exports = {createCliente, getClientes, deleteCliente, getCliente, updateCliente}