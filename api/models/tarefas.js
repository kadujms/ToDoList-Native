const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const Task = sequelize.define('Task', {
  titulo: { type: DataTypes.STRING, allowNull: false },
  descricao: { type: DataTypes.STRING },
  prioridade: { type: DataTypes.STRING, allowNull: false },
  data: { type: DataTypes.DATE, allowNull: false },
  categoria: { type: DataTypes.STRING, allowNull: false }
});

Task.sync(); // Sincroniza o modelo com o banco de dados

module.exports = Task;
