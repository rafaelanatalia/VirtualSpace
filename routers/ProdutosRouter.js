let express = require('express');
let router = express.Router();

let UsuarioController = require('../controller/UsuarioController');
//Rotas Dashboard

router.get('/Todos',UsuarioController.ShowProdutos);
router.get('/:id',UsuarioController.OneProduto);
router.post('/cadastro',UsuarioController.AddProdutos);
router.delete('/:id',UsuarioController.DeleteProduto);
router.put('/:id',UsuarioController.UpdateProduto);

module.exports = router;