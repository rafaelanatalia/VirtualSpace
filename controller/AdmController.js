const Produtos = require('../database/Produtos.json');

const fs = require('fs');
const bcrypt = require('bcrypt');
const { randomUUID } = require('crypto');
const { validationResult } = require('express-validator');
const db = require('../server/models');


    module.exports = AdmController = {
        Create:(req,res)=>{
            res.render('crud-usuarios/criarconta');
            
        },
        Registro: async (req,res)=>{
           
                const nome_loja = req.body.lojanome;
                const email = req.body.email;
                const senha = req.body.senha;
                const senhanovamente = req.body.senhanovamente;
                const foto = "./img";
                const usuarioDB = require('../server/models');

                if(senha == senhanovamente){
                
                const post = await usuarioDB.usuarios.create({
                    nome_loja,
                    email,
                    senha,
                })
                
            
                return res.render('crud-usuarios/login');

                }else{
                    res.send('As Senhas Estão Diferentes');
                }
           
        },
        RegistroSecundarioCreate:(req,res) =>{
            res.render("crud-usuarios/form-Create/create-plan")
        },
     
        showlogin:(req,res)=>{
            res.render('crud-usuarios/login');
        },
    
        Login:(req,res)=>{
            const usuarioDB = require('../server/models');
            const usuarioemail = req.body.email;
            const usuariosenha = req.body.senha;
            const jwt = require('jsonwebtoken');
            const SECRET = 'segredo';

            db.usuarios.findOne({
                where:{
                    email:usuarioemail,
                    senha:usuariosenha
                }
            }).then(function(usuario){
               
                usuario.senha = undefined;
                delete usuario.senha;
                req.session.usuario = usuario ;

                if(usuario.planos_id == 4){
                   

                    return res.redirect('/create-plan');
                }

                    return res.redirect('/dashboard');
            })
    
        },
        Logout:(req,res)=>{
            
            if(req.session.usuario = undefined){

                
            }
    
            
        },
        
    
    
    showDashbord:(req,res)=>{
        res.render('adms/dashboard');
       
        
    },
    
      
    
    

}