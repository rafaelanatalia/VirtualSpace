'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Beneficios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Beneficios.init({
    alterar_cor: DataTypes.STRING,
    alterar_menu: DataTypes.STRING,
    Carrosel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Beneficios',
  });
  return Beneficios;
};