


const  UsuarioController = {

    showProdutos: (req, res) => {
        res.render('adms/Produtos');
    },
    showIncluir: (req, res) => {
        res.render('adms/crudProdutos/produtosIncluir');
    },
    showProcurar: (req, res) => {
        res.render('adms/crudProdutos/produtosProcurar');
    },
    showAlterar: (req, res) => {
        res.render('adms/crudProdutos/produtosAlterar');
    },
    showDeletar: (req, res) => {
        res.render('adms/crudProdutos/produtosDeletar');
    },


   
}

module.exports = UsuarioController;