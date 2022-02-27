
const fs = require('fs');
const bcrypt = require('bcrypt');
const { randomUUID } = require('crypto');
const { validationResult } = require('express-validator');


    module.exports = AdmController = {
       
    Create:(req,res)=>{
        res.render('crud-usuarios/criarconta');
        
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

    showDashbord:(req,res)=>{
        res.render('adms/dashboard');
    },
    
    showProdutos: (req, res) => {
        res.render('adms/addProdutos')
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
        
        const produtos = {nome, descricao, preco,img:'/img/' + req.file.filename}
        
        // Adicionar o id de produtos recém criada
        produtos.id = randomUUID();



        // Adicionar a produtos ao array de de produtos
        const dados=fs.readFileSync(
            __dirname + '/../database/Produtos.json',
            {encoding:"utf-8"} 
        )
        const parseado=JSON.parse(dados)

        parseado.push(produtos)

        // Salvar o json do array de produtos no arquivo Produtos.json temporario
        fs.writeFileSync(
            __dirname + '/../database/Produtos.json',
            JSON.stringify(parseado, null, 4),
            {flag:'w'}
        );
        
        // Direcionar o usuário para a página que exibe a lista de produtos
        res.redirect('/');


}

    }