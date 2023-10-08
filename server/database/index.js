const { Sequelize } = require('sequelize');

const connection = new Sequelize('ecommerce', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  });


try {
    connection.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}


module.exports = connection 