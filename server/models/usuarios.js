'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuarios.init({
    nome_loja: DataTypes.STRING,
    email: DataTypes.STRING,
    foto: DataTypes.STRING,
    senha: DataTypes.STRING,
    planos_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usuarios',
    timestamps: false,
  });
  return usuarios;
};