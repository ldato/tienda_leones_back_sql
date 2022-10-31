const dbConfig = require('../dbconfig');

const Sequelize = require('sequelize');
const cliente = require('./cliente');
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
db.total = require("./total")(sequelize, Sequelize);


db.venta.hasOne(db.total, {
    foreignKey: {name: "ventaId"}
});
db.total.belongsTo(db.venta);

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



db.producto.belongsToMany(db.cliente, {through: db.venta});
db.cliente.belongsToMany(db.producto, {through: db.venta});

db.producto.belongsToMany(db.talle, {through: db.productoTalle});
db.talle.belongsToMany(db.producto, {through: db.productoTalle});



module.exports = db;