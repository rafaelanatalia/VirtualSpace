const controller={
    home:(req,res)=>{
        res.render('index')
    },
    ModeloPaginas:(req,res)=>{
        res.render('paginas/modelo-paginas');
    },
}


module.exports= controller