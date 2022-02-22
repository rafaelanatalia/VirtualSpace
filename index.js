// impostando o express
const express = require("express");
const AdmController = require("./controller/AdmController");
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//importando os roteadores
const VirtualRouter = require("./routers/VirtualRouter");
const AdmRouter = require('./routers/AdmRouter');

//criando o servidor 
const server=express();

//configurando o view engine para ejs
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
//config a pasta public
server.use(express.static(path.join(__dirname, 'public')));


//JSON
server.use(express.urlencoded({extended: false}));
server.use(express.json());

// criar a rota respondendo a requisição
server.use('/', VirtualRouter);
server.use('/adm', AdmRouter);

// catch 404 and forward to error handler
server.use(function(req, res, next) {

    next(createError(404));
    
  });
  
  // error handler
  server.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

//levantando o servidor
server.listen(5000,()=>{
    console.log("Servidor Ok")
})

