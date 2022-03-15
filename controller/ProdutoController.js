
const Produtos = require('../database/Produtos.json');

const fs = require('fs');
const { randomUUID } = require('crypto');
const { validationResult } = require('express-validator');

module.exports = UsuarioController = {

    ShowProdutos: (req, res) => {
        res.render('adms/addProdutos')
    },


    AddProdutos: (req, res) => {

        const erros = validationResult(req);

        if (!erros.isEmpty()) {
            // return res.send(erros.mapped());
            res.render('crud-usuarios/addProdutos', {
                erros: erros.mapped()
            })
        }

        const nome = req.body.nome;
        const descricao = req.body.descricao;
        const preco = Number(req.body.preco);
        // const categori = Select(req.body.select);

        const produtos = {
            nome,
            descricao,
            preco,
            img: 'assets/img/' + req.file.filename
        }

        // Adicionar o id de produtos recém criada
        produtos.id = randomUUID();



        // Adicionar a produtos ao array de de produtos
        const dados = fs.readFileSync(
            __dirname + '/../database/Produtos.json', {
                encoding: "utf-8"
            }
        )
        const parseado = JSON.parse(dados)

        parseado.push(produtos)

        // Salvar o json do array de produtos no arquivo Produtos.json temporario
        fs.writeFileSync(
            __dirname + '/../database/Produtos.json',
            JSON.stringify(parseado, null, 4), {
                flag: 'w'
            }
        );

        // Direcionar o usuário para a página que exibe a lista de produtos
        res.redirect('/');


    },
    OneProduto:(req,res)=>{
        res.send("hello")
    },
    UpdateProduto:(req,res)=>{
        res.send("produto atualizado")
    },
    DeleteProduto:(req,res)=>{
        res.send("produto deletado")
    }
}