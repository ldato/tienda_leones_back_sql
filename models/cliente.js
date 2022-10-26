module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("cliente", {
        dni: {
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
        apellido: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        telefono: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Cliente;
}