
//criando o  roteador e impostando o express
const express = require("express");
const AdmController = require("../controller/AdmController");


// import multer
const multer= require("../middlewares/multer")


//impostando o controller
const VirtualController= require('../controller/VirtualController');

//criando roteador e exportando o roteador
const router=express.Router();

//definindo rotas

router.get('/login',AdmController.showlogin);
router.post('/create',AdmController.Registro);
router.get('/create',AdmController.Create);
router.post('/login',AdmController.Login);
router.get('adm/dashboard',AdmController.showDashbord);

// produtos
router.get('/adicionarprodutos',AdmController.showProdutos);
router.post('/adicionarprodutos',multer.single('img'),AdmController.AddProdutos);


module.exports= router;






