module.exports = (sequelize, Sequelize) => {
    const ProductoTalle = sequelize.define("productotalle", {
      productoCodigo: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      talleId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      cantidad: {
        type: Sequelize.INTEGER,
        required:true
      }      
    },
    {
        timestamps: true,
        paranoid: true
    });    
    return ProductoTalle;
  };