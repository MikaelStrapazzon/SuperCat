const Sequelize = require('sequelize');
const database = require('../database/db');

const Cat = database.define('cat', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    color: Sequelize.STRING,
    gender: Sequelize.STRING
})

module.exports = Cat;