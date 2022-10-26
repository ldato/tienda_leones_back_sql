const {getOne} = require('../services/user');
const userToken = require('../middleware/userToken');
const bcrypt = require('bcrypt');

const loginUser = async (req, res) => {
    const {username, password} = req.body;
    try {
        const user = await getOne(username);
    if(!user) {
        return res.status(404).json({message: 'Usuario no encontrado'});
    }

    const isValidPassword = bcrypt.compareSync(password, user.password);

    if (!isValidPassword) {
        return res.status(401).json({message: "Contraseña incorrecta"});
    }

    const token = await userToken(user);

    return res.status(200).json({
        message: 'Login exitoso',
        user,
        token
    });  
    } catch (error) {
        return res.status(500).json({
            message: "A ocurrido un error",
            error: error
        });
    }
        
}

module.exports = {loginUser};