const db = require('../server/models');


const  UsuarioController = {

    showProdutos: (req, res) => {
        res.render('adms/Produtos');
    },
    showIncluir: (req, res) => {
        res.render('adms/produtosIncluir');
    },
    showAlterar: (req, res) => {
        res.render('adms/produtosAlterar');
    },
    showDeletar: (req, res) => {
        res.render('adms/produtosDeletar');
    },
    Incluir: async (req,res)=>{
        const titulo = req.body.nome;
        const descricao = req.body.descricao;
        const preco = req.body.preco;
        const foto = req.file.filename;
        const usuario_id = req.session.usuario.id;
        const DB = require('../server/models');

        const post =  await DB.itens.create({
            foto,
            titulo,
            descricao,
            preco,
            usuario_id,
                 
            })

        res.render('adms/produtos')
    },


   
}

module.exports = UsuarioController;