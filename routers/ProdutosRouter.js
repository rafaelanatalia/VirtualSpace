let express = require('express');
let router = express.Router();

let UsuarioController = require('../controller/UsuarioController');
//Rotas Dashboard

router.get('/Todos',UsuarioController.ShowProdutos);
router.get('/:id',UsuarioController);
router.post('/cadastro',UsuarioController.AddProdutos);
router.delete('/:id',UsuarioController.Delete);
router.put('/:id',UsuarioController);

module.exports = router;