// impostando o express
require("dotenv").config()
const express = require("express");
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

//importando os roteadores
const VirtualRouter = require("./routers/VirtualRouter");
const AdmRouter = require('./routers/AdmRouter');
const ProdutosRouter = require("./routers/ProdutosRouter");
const PagamentosRouter = require("./routers/PagamentosRouter");
const sessionMiddleware = require("./middlewares/sessionMiddleware");
const planVerify = require("./middlewares/planVerify");

// importando os middlewares


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

app.use(session({
  name:"VirtualSpace",
  secret:process.env.SENHASESSION,
  resave:false,
  saveUninitialized:false
}))
app.use(express.static(path.join(__dirname, 'public')));


//JSON
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Middleware

//res local
app.use(sessionMiddleware);





// =====================Rotas===========================

app.use('/', planVerify,VirtualRouter); //Pagina Principal
app.use('/',planVerify, AdmRouter); //Usuarios e Clientes
app.use('/produtos',planVerify,ProdutosRouter);//Produtos


app.use('/pagamento',planVerify,PagamentosRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('404');
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


//o levantamento do servidor foi para a bin 
// importando o app para a bin 
module.exports=app

