//criando o  roteador e impostando o express
const express = require("express");

//impostando o controller
const VirtualController= require('../controller/VirtualController');

//criando roteador e exportando o roteador
const router=express.Router();

//definindo rotas
router.get('/',VirtualController.home);

module.exports= router