const { Sequelize, DataTypes } = require('sequelize');

// Create a Sequelize instance and connect to your MySQL database
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define the Expense model
const Expense = sequelize.define('Expense', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  // You can add more fields as needed
});

// Synchronize the model with the database (create the table if it doesn't exist)
sequelize.sync().then(() => {
  console.log('Expense model synced with the database');
}).catch((error) => {
  console.error('Error syncing the model:', error);
});

module.exports = { Expense };
