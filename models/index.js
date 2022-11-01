const dbConfig = require('../dbconfig');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    port: 3306,
    dialect: "mysql"
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user")(sequelize, Sequelize);
db.role = require("./role")(sequelize, Sequelize);
db.producto = require("./producto")(sequelize, Sequelize);
db.marca = require("./marca")(sequelize, Sequelize);
db.proveedor = require("./proveedor")(sequelize, Sequelize);
db.cliente = require("./cliente")(sequelize, Sequelize);
db.venta = require("./venta")(sequelize, Sequelize);
db.talle = require("./talle")(sequelize, Sequelize);
db.productoTalle = require("./productoTalle")(sequelize, Sequelize);
db.detalleVenta = require('./detalleVenta')(sequelize, Sequelize);

db.role.hasMany(db.user, {
    foreignKey: {name: "roleId"},
    as: "User_Role_Id",
    onDelete: "CASCADE"
})

db.marca.hasMany(db.producto, {
    foreignKey: {name: "marcaId"},
    as: "Producto_Marca_Id",
    onDelete: "CASCADE"
})

db.proveedor.hasMany(db.producto, {
    foreignKey: {name: "proveedorId"},
    as: "Producto_Proveedor_Id",
    onDelete: "CASCADE"
})

db.cliente.hasMany(db.venta, {
    foreignKey: {name: "clienteDni"},
    as: "Ventas_Clientes",
    onDelete: "CASCADE"
})

db.cliente.hasMany(db.venta, {
    foreignKey: {name: "clienteDni"},
    as: "venta_cliente_id",
    onDelete: "CASCADE"
})


// db.producto.belongsToMany(db.venta, {through: db.detalleVenta});
// db.venta.belongsToMany(db.producto, {through: db.detalleVenta});

db.producto.belongsToMany(db.venta, {
    through: db.detalleVenta,
    unique: false,
    foreignKey: "productoCodigo"
});

db.venta.belongsToMany(db.producto, {
    through: db.detalleVenta,
    unique: false,
    foreignKey: "idVenta"
});

db.producto.belongsToMany(db.talle, {through: db.productoTalle});
db.talle.belongsToMany(db.producto, {through: db.productoTalle});



module.exports = db;