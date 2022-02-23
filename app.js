// impostando o express
require("dotenv").config()
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
const app=express();

//configurando o view engine para ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//config a pasta public
app.use(express.static(path.join(__dirname, 'public')));


//JSON
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// criar a rota respondendo a requisição
app.use('/', VirtualRouter);
app.use('/adm', AdmRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {

    next(createError(404));
   
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

//levantando o servidor
module.exports=app

