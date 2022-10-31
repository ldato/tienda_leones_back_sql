module.exports = (sequelize, Sequelize) => {
    const Producto = sequelize.define("producto", {
        codigo : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        idMarca: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        idProveedor: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        descripcion: {
            type: Sequelize.STRING,
            allowNull: true
        },
        precioCosto: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        precioVenta: {
            type: Sequelize.FLOAT,
            allowNull: false
        }
    },
    {
        timestamps: true,
        paranoid: true
    });
    return Producto;
}