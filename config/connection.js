// EXTERNAL PACKAGES REQUIRED FOR FUNCATIONALITY
const Sequelize = require('sequelize');
require('dotenv').config();

// CONNECTION TO DATABASE
const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PW,
        {
            host: '',
            dialect: 'mysql',
            port: 3306
        });

module.exports = sequelize;