// impostando o express
const express = require("express");
const AdmController = require("./controller/AdmController");


//importando os roteadores
const VirtualRouter = require("./routers/VirtualRouter");
const AdmRouter = require('./routers/AdmRouter');

//criando o servidor 
const server=express();

//configurando o view engine para ejs
server.set("view engine","ejs");
//necessario apenas caso precise renomear a pasta ou rota
server.set('views','./views');

//config a pasta public
server.use(express.static(__dirname+ '/public'));

// criar a rota respondendo a requisição
server.use('/', VirtualRouter);
server.use('/adm', AdmRouter);


//levantando o servidor
server.listen(5000,()=>{
    console.log("Servidor Ok")
})

