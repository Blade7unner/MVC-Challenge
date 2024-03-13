const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// Create our User model
class User extends Model {}

// Define table columns and configuration
User.init(
  {
    // Define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define a username column
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define a password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: true, // Enable timestamps
    freezeTableName: true, // Model tableName will be the same as the model name
    underscored: true, // Use underscores instead of camel-casing
    modelName: 'user', // Make it so our model name stays lowercase in the database
  }
);

module.exports = User;
