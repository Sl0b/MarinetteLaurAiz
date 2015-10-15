// DATABASE CONFIG
var Sequelize = require('sequelize');

module.exports = new Sequelize('databaseName', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

