const Sequelize = require('sequelize').Sequelize;
const sequelize = new Sequelize('supercat', 'root', 'root', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;