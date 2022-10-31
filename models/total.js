module.exports = (sequelize, Sequelize) => {
    const Total = sequelize.define("total", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        ventaId: {
            type: Sequelize.STRING
        },
        total: {
            type: Sequelize.FLOAT
        },
    },
    {
        timestamps: true,
        paranoid: true
    });
    return Total;
}


