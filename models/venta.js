module.exports = (sequelize, Sequelize) => {
    const Venta = sequelize.define("venta", {
      idVenta: {
        type: Sequelize.STRING,
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
      precioUnitario: {
        type: Sequelize.FLOAT
      },
      subTotal: {
        type: Sequelize.FLOAT
      }
    },
    {
        timestamps: true,
        paranoid: true
    });    
    return Venta;
  };