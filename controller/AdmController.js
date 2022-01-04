const fs = require('fs');


    module.exports = AdmController = {
       
    Create:(req,res)=>{
        res.render('crud-usuarios/criarconta');
        
    },

    showlogin:(req,res)=>{
        res.render('crud-usuarios/login');
    },

    Login:(req,res)=>{
         
        const {email,senha} = req.body;

        const usuarios = require('../database/Usuarios.json');

        const usuario = usuarios.find( u => u.email == email && u.senha == senha );

        if(usuario === undefined){
            return res.send('Senha ou Email invalido');
        }

        req.session.usuario = usuario;

        return res.redirect('index');
    },
    Logout:(req,res)=>{
        
        req.session,usuario = undefined;

        return res.redirect('/adm/login')
    },
    Registro:(req,res)=>{
        const user = require('../database/Usuarios.json');
        const nomeloja = req.body.lojanome;
        const email = req.body.email;
        const senha = req.body.senha;
        
        const cliente = {nomeloja,email,senha};

        cliente.id = user[user.length - 1].id + 1;

        user.push(cliente);

        fs.writeFileSync(
            __dirname + '/../database/Usuarios.json',JSON.stringify(user, null, 3),{flag:'w'}
        );
        res.redirect('/');
    }
};

