let express = require('express');
let router = express.Router();


let ProdutoController = require('../controller/ProdutoController');


//Rota para Pagina do CRUD Produtos
router.get('/',ProdutoController.ShowProdutos);



module.exports = router;