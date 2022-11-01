module.exports = (sequelize, Sequelize) => {
    const DetalleVenta = sequelize.define("detalleVenta", {
        idVenta: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        productoCodigo: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        cantidad: {
            type: Sequelize.INTEGER
        },
        precioUnitario: {
            type: Sequelize.FLOAT
        },
        subtotal: {
            type: Sequelize.FLOAT
        }
    });
    return DetalleVenta;
}