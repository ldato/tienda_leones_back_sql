module.exports = (sequelize, Sequelize) => {
    const Venta = sequelize.define("venta", {
      idVenta: {
        type: Sequelize.STRING,
        primaryKey: true
      },      
      clienteDni: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      total: {
        type: Sequelize.FLOAT
      }
    },
    {
        timestamps: true,
        paranoid: true
    });    
    return Venta;
  };