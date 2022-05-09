let express = require('express');
const multer = require('../middlewares/multer');
let router = express.Router();



let ProdutoController = require('../controller/ProdutoController');


//Rota para Pagina do CRUD Produtos
router.get('/',ProdutoController.showProdutos);

//Crud de produtos - GET
router.get('/incluir',ProdutoController.showIncluir);
router.get('/alterar',ProdutoController.showAlterar);
router.get('/deletar',ProdutoController.showDeletar);

//Crud de produtos - POST
router.post('/incluir',multer.single('foto'),ProdutoController.Incluir);

module.exports = router;