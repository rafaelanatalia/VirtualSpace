const db = require('../server/models');


const  UsuarioController = {

    showProdutos: (req, res) => {
        res.render('adms/Produtos');
    },
    showIncluir: (req, res) => {
        res.render('adms/produtosIncluir');
    },
    showProcurar: (req, res) => {
        res.render('adms/produtosProcurar');
    },
    showAlterar: (req, res) => {
        res.render('adms/produtosAlterar');
    },
    showDeletar: (req, res) => {
        res.render('adms/produtosDeletar');
    },
    Incluir: async (req,res)=>{
        const nome = req.body.nome;
        const descricao = req.body.descricao;
        const preco = req.body.preco;
        const foto = req.body.foto;
        const DB = require('../server/models');

        const post =  await DB.itens.create({
            foto,
            nome,
            descricao,
            preco
                 
            })

        res.send(nome,descricao,preco)
    },


   
}

module.exports = UsuarioController;