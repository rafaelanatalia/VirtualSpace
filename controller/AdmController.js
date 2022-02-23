// const produtos = require('../database/Produtos.json');
const fs = require('fs');
const bcrypt = require('bcrypt');
const { randomUUID } = require('crypto');
const { validationResult } = require('express-validator');


    module.exports = AdmController = {
       
    Create:(req,res)=>{
        res.render('crud-usuarios/criarconta');
        
    },

    showlogin:(req,res)=>{
        res.render('crud-usuarios/login');
    },

    Login:(req,res)=>{
         
        const {email,senha} = req.body;

        const usuariosstring = fs.readFileSync(__dirname + '/../database/Usuarios.json',{encoding:"utf-8"});
        const usuarios = JSON.parse(usuariosstring);

        const usuario = usuarios.find( u => u.email == email);

        if(usuario === undefined){
            return res.send('Senha ou Email invalido');
        }
        const senhacorreta = bcrypt.compareSync(senha,usuario.senha);
        
        if(!senhacorreta){
            return res.send('Senha ou Email invalido');
        }
        // req.session.usuario = usuario;

        return res.redirect('/views/dashboard');

    },
    Logout:(req,res)=>{
        
        req.session.usuario = undefined;

        return res.redirect('/adm/login')
    },

    Registro:(req,res)=>{
        const userstring = fs.readFileSync(__dirname + '/../database/Usuarios.json',{encoding:"utf-8"});
        const user = JSON.parse(userstring);
        const nomeloja = req.body.lojanome;
        const email = req.body.email;
        const senha = req.body.senha;
        const senhanovamente = req.body.senhanovamente;
        if(senha == senhanovamente){
        const hash = bcrypt.hashSync(senha,10); 
        
        const cliente = {nomeloja,email,senha:hash};

        cliente.id = user.length === 0 ? 1 : user.length + 1;

        user.push(cliente);

        fs.writeFileSync(
            __dirname + '/../database/Usuarios.json',JSON.stringify(user, null, 3),{flag:'w'}
        );
        res.redirect('/');
        }else{
            res.send('As Senhas Estão Diferentes')
        }
    },

    showProdutos: (req, res) => {
        res.render('crud-usuarios/addProdutos')
    },


    AddProdutos: (req,res) => {

        const erros = validationResult(req);
        
        if(!erros.isEmpty()){
            // return res.send(erros.mapped());
            res.render('crud-usuarios/addProdutos', {erros: erros.mapped()})
        }

        const nome = req.body.nome;
        const descricao = req.body.descricao;
        const preco = Number(req.body.preco);
        // const categori = Select(req.body.select);
        const produtos = {nome, descricao, preco}
        
        // Adicionar o id à pizza recém criada
        produtos.id = randomUUID();



        // Adicionar a pizza ao array de pizzas
        const dados=fs.readFileSync(
            __dirname + '/../database/Produtos.json',
            {encoding:"utf-8"} 
        )
        const parseado=JSON.parse(dados)

        parseado.push(produtos)

        // Salvar o json do array de pizzas no arquivo Pizzas.json
        fs.writeFileSync(
            __dirname + '/../database/Produtos.json',
            JSON.stringify(parseado, null, 4),
            {flag:'w'}
        );
        
        // Direcionar o usuário para a página que exibe a lista de pizzas
        res.redirect('/');


}

    }