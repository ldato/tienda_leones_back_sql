const jwt = require('jsonwebtoken');
const secret = "TiendaLeones";

const generateToken = async (user) => {
    const tokenSign = {
        id: user.id,
        roleId: user.roleId
    };
    const expire = {
        expiresIn: "1d"
    }

    return jwt.sign(tokenSign, secret, expire);
}

module.exports = generateToken;