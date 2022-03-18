
const fs = require('fs');
const bcrypt = require('bcrypt');
const { randomUUID } = require('crypto');
const { validationResult } = require('express-validator');

const controller={
    home:(req,res)=>{
        res.render('index')
    },
    ModeloPaginas:(req,res)=>{
        res.render('paginas/modelo-paginas');
    },
    
    PlanoBasico:(req,res)=>{
        res.render('paginas/planobasico');
    },
    PlanoMedio:(req,res)=>{
        res.render('paginas/planoMedio');
    },
    PlanoTop:(req,res)=>{
        res.render('paginas/pagina-top');
    },

    ShowProduto:(req,res)=>{
        res.render('paginas/produto');

    },
    // usuarios  cliente
    Create:(req,res)=>{
        res.render('crud-usuarios/criarcontaCliente');
        
    },
    Registro:(req,res)=>{
        const userstring = fs.readFileSync(__dirname + '/../database/Clientes.json',{encoding:"utf-8"});
        const user = JSON.parse(userstring);
        const nome = req.body.nome;
        const email = req.body.email;
        const senha = req.body.senha;
        const senhanovamente = req.body.senhanovamente;
        if(senha == senhanovamente){
        const hash = bcrypt.hashSync(senha,10); 
        
        const cliente = {nome,email,senha:hash};

        cliente.id = user.length === 0 ? 1 : user.length + 1;

        user.push(cliente);

        fs.writeFileSync(
            __dirname + '/../database/Clientes.json',JSON.stringify(user, null, 3),{flag:'w'}
        );
        res.redirect('/');
        }else{
            res.send('As Senhas Estão Diferentes')
        }
    },
 
    showlogin:(req,res)=>{
        res.render('crud-usuarios/loginCliente');
    },

    Login:(req,res)=>{
         
        const {email,senha} = req.body;
    
        const user = fs.readFileSync(__dirname + '/../database/Clientes.json',{encoding:"utf-8"});
        const usuarios = JSON.parse(user);

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

        return res.redirect('/loginCliente')
    },
    


showDashbord:(req,res)=>{
    res.render('adms/dashboard');
   
    
},
 test:(req,res)=>{
     res.render('test')
 }
}


module.exports= controller