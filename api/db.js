const Sequelize = require('sequelize');

//conexão com o banco de dados 
const sequelize = new Sequelize('task', 'root', 'Douglas5', {
    host: 'localhost',
    dialect: 'mysql',

  });

  
module.exports = sequelize