const {create, getAll, getOne, deleteOne, updateOne} = require('../services/proveedor');

const createProveedor = async (req, res) => {
    const data = req.body;
    try {
        const proveedor = await create(data);
        return res.status(201).json(proveedor);
    } catch (error) {
        return res.status(401).json({
            message: "Ha ocurrido un error al crear el proveedor",
            error: error
        })
    }
    
}

const getProveedores = async (req, res) => {
    try {
        const proveedores = await getAll();
        return res.status(200).json(proveedores);
    } catch (error) {
        return res.status(401).json({
            message: "Ha ocurrido un error al consultar los proveedores",
            error: error
        })
    }
}

const getProveedor = async (req, res) => {
    const {nombre} = req.body;
    try {
        const proveedor = await getOne(nombre);
        if (!proveedor) {
            return res.status(404).json({
                message: "No se encontro el proveedor con el nombre indicado"
            })
        }
        return res.status(200).json(proveedor);
    } catch (error) {
        return res.status(401).json({
            message: "Ha ocurrido un error al consultar el proveedor",
            error: error
        })
    }
}

const deleteProveedor = async (req, res) => {
    const {nombre} = req.body;
    try {
        const proveedor = await deleteOne(nombre);
        if (!proveedor) {
            return res.status(404).json({
                message: "No se encontro el proveedor con el nombre indicado"
            })
        }
        return res.status(200).json({
            message: `El proveedor ${nombre} fue elinminado con éxito`
        });
    } catch (error) {
        return res.status(401).json({
            message: "Ha ocurrido un error al eliminar el proveedor el proveedor",
            error: error
        })
    }
}

const updateProveedor = async (req, res) => {
    const data = req.body;
    try {
        const proveedor = await getOne(data.nombre);
        console.log(proveedor);
    if (!proveedor) {
        return res.status(404).json({
            message: "No se encontro el proveedor con el nombre indicado"
        })
    }
    let objProveedor = {
        nombre: data.nombre===null || data.nombre===undefined ? proveedor.nombre : data.nombre,
        telefono: data.telefono===null || data.telefono===undefined ? proveedor.telefono : data.telefono,
        email: data.email===null || data.email===undefined ? proveedor.email : data.email
    }

    const proveedorUpdated = await updateOne(objProveedor);
    return res.status(200).json(proveedorUpdated);
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: "Ha ocurrido un error al actualizar el proveedor el proveedor",
            error: error
        })
    }
    
    
    // nombre = nombre===null || nombre===undefined ? proveedor.nombre : nombre;
    // telefono = telefono===null || telefono===undefined ? proveedor.telefono : telefono;
    // email = email===null || email===undefined ? proveedor.email : email;
}

module.exports = {createProveedor, getProveedores, getProveedor, deleteProveedor, updateProveedor}