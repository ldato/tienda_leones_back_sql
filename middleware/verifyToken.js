const JWT = require('jsonwebtoken');
const secret = "TiendaLeones";

const verifyToken = async (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        return res.status(401).json({
            error: "No se ha enviado el token de autenticación"
        })
    }
    JWT.verify(token, secret, async (error, user) => {
        if (error) {
            return res.status(400).json({
                message: "Token invalido"
            })
        }
        req.user = user;
        next();
    })
}

module.exports = verifyToken;