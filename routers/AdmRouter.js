
//criando o  roteador e impostando o express
const express = require("express");


//impostando o controller
const AdmController = require("../controller/AdmController");
const UsuarioContoller = require("../controller/ProdutoController");



// import multer


//Importando Middleware
 
const Verificador = require('../middlewares/null-Verify');

//criando roteador e exportando o roteador
const router=express.Router();

//definindo rotas

// pages de login
router.get('/login',AdmController.showlogin);
router.post('/create',AdmController.Registro);
router.get('/create',AdmController.Create);
router.post('/login',AdmController.Login);
router.get('adm/dashboard',AdmController.showDashbord);

// produtos



module.exports= router;






