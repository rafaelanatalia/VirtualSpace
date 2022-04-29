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
           
                const nome_loja = req.body.lojanome;
                const email = req.body.email;
                const senha = req.body.senha;
                const senhanovamente = req.body.senhanovamente;
                const planos_id = 4;
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
           
        },
        RegistroSecundarioCreate:(req,res) =>{
            res.render("crud-usuarios/form-Create/create-plan")
        },
     
        showlogin:(req,res)=>{
            res.render('crud-usuarios/login');
        },
    
        Login:(req,res)=>{
            const usuarioDB = require('../server/models');

        
    
        },
        Logout:(req,res)=>{
            
            if(req.session.usuario = undefined){

                
            }
    
            
        },
        
    
    
    showDashbord:(req,res)=>{
        res.render('adms/dashboard');
       
        
    },
    
      
    
    

}