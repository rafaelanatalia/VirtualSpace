
//criando o  roteador e impostando o express
const express = require("express");
const AdmController = require("../controller/AdmController");

//impostando o controller
const VirtualController= require('../controller/VirtualController');

//criando roteador e exportando o roteador
const router=express.Router();

//definindo rotas

router.get('/login',AdmController.showlogin);
router.post('/create',AdmController.Registro);
router.get('/create',AdmController.Create);
router.post('/login',AdmController.Login);
router.get('/dashboard',AdmController.Login);

module.exports= router;






