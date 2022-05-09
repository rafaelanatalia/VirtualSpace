'use strict';
const {
  Model
} = require('sequelize');
const usuarios = require('./usuarios');
module.exports = (sequelize, DataTypes) => {
  class itens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    
    }
  }
  itens.init({
    foto: DataTypes.STRING,
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'itens',
  });
  return itens;
};