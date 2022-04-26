const Produtos = require('../database/Produtos.json');

const fs = require('fs');
const bcrypt = require('bcrypt');
const { randomUUID } = require('crypto');
const { validationResult } = require('express-validator');


    module.exports = AdmController = {
        Create:(req,res)=>{
            res.render('crud-usuarios/criarconta');
            
        },
        Registro: async (req,res)=>{
            try{
                const nome_loja = req.body.lojanome;
                const email = req.body.email;
                const senha = req.body.senha;
                const senhanovamente = req.body.senhanovamente;
                const planos_id = 1;
                const foto = "./img";
                const usuarioDB = require('../server/models');

                if(senha == senhanovamente){
                
                const post = await usuarioDB.usuarios.create({
                    nome_loja,
                    email,
                    senha,
                    planos_id
                })
        
            
                return res.status(200).send(post);
                }else{
                    res.send('As Senhas Estão Diferentes');
                }
            } catch(err){
                return res.status(400).send({ error : err });
            }
        },
        RegistroSecundarioCreate:(req,res) =>{
            res.render("crud-usuarios/form-Create/create-plan")
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
    
            return res.redirect('/login')
        },
        
    
    
    showDashbord:(req,res)=>{
        res.render('adms/dashboard');
       
        
    },
    
      
    
    

}