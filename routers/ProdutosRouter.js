let express = require('express');
let router = express.Router();
const upload= require("../middlewares/multer")


let ProdutoController = require('../controller/ProdutoController');
//Rotas Dashboard

router.get('/Todos',ProdutoController.ShowProdutos);
router.get('/:id',ProdutoController.OneProduto);
router.post('/cadastro',ProdutoController.AddProdutos);
router.delete('/:id',ProdutoController.DeleteProduto);
router.put('/:id',ProdutoController.UpdateProduto);


router.get('/adicionarprodutos',ProdutoController.ShowProdutos);
router.post('/adicionarprodutos',upload.single('img'),ProdutoController.AddProdutos);


module.exports = router;