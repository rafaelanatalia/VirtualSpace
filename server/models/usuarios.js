'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class usuarios extends Model {}
  

  usuarios.associate = (models) =>{
    usuarios.hasMany(models.planos,{
      foreignkey:"planos_id",
    });
  }
  usuarios.init({
    nome_loja: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    planos_id: DataTypes.INTEGER,
    foto: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'usuarios',
    timestamps: true,
  });
  return usuarios;
};