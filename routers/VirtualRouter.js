//criando o  roteador e impostando o express
const express = require("express");


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


// pages de login
router.get('/cliente/login',VirtualController.showlogin);
router.post('/cliente/create',VirtualController.Registro);
router.get('/cliente/create',VirtualController.Create);
router.post('/cliente/login',VirtualController.Login);


// teste para fazer o header e footer no css 
router.get('/test',VirtualController.test)


module.exports= router