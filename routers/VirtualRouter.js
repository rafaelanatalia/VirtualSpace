//criando o  roteador e impostando o express
const express = require("express");

//Importando Middlewares
const Verificador = require('../middlewares/null-Verify')
//impostando o controller
const VirtualController= require('../controller/VirtualController');

//criando roteador e exportando o roteador
const router=express.Router();

//home
router.get('/',VirtualController.home);

//modelo de pagina
router.get('/ModeloDePaginas',VirtualController.ModeloPaginas);

module.exports= router