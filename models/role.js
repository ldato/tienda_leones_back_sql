module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("role", {
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
    return Role;
}