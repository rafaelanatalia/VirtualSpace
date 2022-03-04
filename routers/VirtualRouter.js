//criando o  roteador e impostando o express
const express = require("express");
const AdmController = require("../controller/AdmController");
const UsuarioController = require("../controller/UsuarioController");

//impostando o controller
const VirtualController= require('../controller/VirtualController');

//criando roteador e exportando o roteador
const router=express.Router();

//definindo rotas
router.get('/',VirtualController.home);
router.get('/ModeloDePaginas',VirtualController.ModeloPaginas);
router.get('/beta/planobasico',VirtualController.PlanoBasico);
router.get('/beta/planomedio',VirtualController.PlanoMedio);
router.get('/beta/planotop',VirtualController.PlanoTop);
router.get('/produtos',VirtualController.ShowProduto);

// Rotas Dashboard

router.get('/produtos',UsuarioController.ShowProdutos);
router.get('/produtos/:id',UsuarioController);
router.post('/cadastro-produtos',UsuarioController.AddProdutos);
router.delete('/produtos/:id',UsuarioController.Delete);
router.put('/produtos/:id',UsuarioController);

module.exports= router