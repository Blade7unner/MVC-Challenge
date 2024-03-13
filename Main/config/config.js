require('dotenv').config();

const Sequelize = require('sequelize');

module.exports = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Username
  process.env.DB_PASSWORD, // Password
  {
    host: process.env.DB_HOST, // Database host
    dialect: 'mysql', // We specify the dialect here
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);
