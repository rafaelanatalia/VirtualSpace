const db = require('../server/models');


    const  AdmController = {
        showlogin:(req,res)=>{
            res.render('crud-usuarios/login');
        },
        Login:(req,res)=>{
            const usuarioDB = require('../server/models');
            const usuarioemail = req.body.email;
            const usuariosenha = req.body.senha;
            
            db.usuarios.findOne({
                where:{
                    email:usuarioemail,
                    senha:usuariosenha
                }
            }).then(function(usuario){
               
                usuario.senha = undefined;
                delete usuario.senha;
                req.session.usuario = usuario ;

                    return res.redirect('/dashboard');
            })
    
        },
        Create:(req,res)=>{
            res.render('crud-usuarios/criarconta');
            
        },
        Registro: async (req,res)=>{
           
                const nome_loja = req.body.lojanome;
                const email = req.body.email;
                const senha = req.body.senha;
                const senhanovamente = req.body.senhanovamente;
                const usuarioDB = require('../server/models');

                if(senha == senhanovamente){
                
                const post = await usuarioDB.usuarios.create({
                    nome_loja,
                    email,
                    senha,
                })
                
            
                return res.render('crud-usuarios/login');

                }else{

                    res.render('As Senhas Estão Diferentes');
                }
           
        },
        showloginCliente:(req,res)=>{
            res.render('crud-usuarios/loginCliente');
        },
        loginCliente:(req,res)=>{
            const clienteemail = req.body.email;
            const clientesenha = req.body.senha;
            
            db.clientes.findOne({
                where:{
                    email:clienteemail,
                    senha:clientesenha
                }
            }).then(function(cliente){
               
                cliente.senha = undefined;
                delete cliente.senha;
                req.session.cliente = cliente ;

                    return res.render('index');
            })
        },
        showCreateCliente:(req,res)=>{
            res.render('crud-usuarios/criarcontaCliente');
        },
        CreateCliente: async (req,res)=>{
            const nome_cliente = req.body.nome;
                const email = req.body.email;
                const senha = req.body.senha;
                const senhanovamente = req.body.senhanovamente;
                const usuarioDB = require('../server/models');

                if(senha == senhanovamente){
                
                const post = await usuarioDB.clientes.create({
                    nome_cliente,
                    email,
                    senha,
                })
                
            
                return res.render('crud-usuarios/login');
             }
        },
        

        RegistroSecundarioCreate:(req,res) =>{
            res.render("crud-usuarios/form-Create/create-plan")
        },
        
    
        showDashbord:(req,res)=>{
            res.render('adms/dashboard');
       
        
        },
        showplanotop:(req,res)=>{
            res.render('paginas/pagina-top');
        },
        showConfig:(req,res)=>{
            res.render('adms/config');
        }
}

module.exports = AdmController;