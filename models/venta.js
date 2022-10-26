module.exports = (sequelize, Sequelize) => {
    const Venta = sequelize.define("venta", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      cantidad: {
        type: Sequelize.INTEGER,
      },
      productoCodigo: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      clienteDni: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
    },
    {
        timestamps: true,
        paranoid: true
    });    
    return Venta;
  };