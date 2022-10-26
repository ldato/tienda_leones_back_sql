module.exports = (sequelize, Sequelize) => {
    const Proveedor = sequelize.define("proveedor", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        telefono: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        timestamps: true,
        paranoid: true
    });
    return Proveedor;
}