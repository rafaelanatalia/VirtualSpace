
//criando o  roteador e impostando o express
const express = require("express");


//impostando o controller
const AdmController = require("../controller/AdmController");
const UsuarioContoller = require("../controller/UsuarioController")

const VirtualController= require('../controller/VirtualController');



// import multer
const upload= require("../middlewares/multer")




//criando roteador e exportando o roteador
const router=express.Router();

//definindo rotas

router.get('/login',AdmController.showlogin);
router.post('/create',AdmController.Registro);
router.get('/create',AdmController.Create);
router.post('/login',AdmController.Login);
router.get('adm/dashboard',AdmController.showDashbord);

// produtos
router.get('/adicionarprodutos',UsuarioContoller.ShowProdutos);
router.post('/adicionarprodutos',upload.single('img'),UsuarioContoller.AddProdutos);


module.exports= router;






