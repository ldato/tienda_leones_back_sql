module.exports = (sequelize, Sequelize) => {
    const Marca = sequelize.define("marca", {
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
        }
    },
    {
        timestamps: true,
        paranoid: true
    });
    return Marca;
}