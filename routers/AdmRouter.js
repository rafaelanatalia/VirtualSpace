
//criando o  roteador e impostando o express
const express = require("express");

//impostando o controller
const AdmController = require("../controller/AdmController");
const clientVerify = require("../middlewares/clientVerify");

//criando roteador e exportando o roteador
const router=express.Router();

// ============================Rotas Para Adm===================================
//Login De Usuario
router.get('/login',AdmController.showlogin);
router.post('/login',AdmController.Login);

//Registro De Usuario
router.get('/create',AdmController.Create);
router.post('/create',AdmController.Registro);

//Segunda Pagina De Registro
router.get('/create-plan',clientVerify,AdmController.RegistroSecundarioCreate);


//Login De Cliente
router.get('/cliente/login',AdmController.showloginCliente);
router.post('/cliente/login',AdmController.loginCliente);

//Registro De Cliente
router.get('/cliente/create',AdmController.showCreateCliente);
router.post('/cliente/create',AdmController.CreateCliente);

//Rota Para Dashboard
router.get('/dashboard',clientVerify,AdmController.showDashbord);




module.exports= router;






