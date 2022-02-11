const controller={
    home:(req,res)=>{
        res.render('index')
    },
    ModeloPaginas:(req,res)=>{
        res.render('paginas/modelo-paginas');
    },
    
    PlanoBasico:(req,res)=>{
        res.render('paginas/planobasico');
    },
    ShowProduto:(req,res)=>{
        res.render('paginas/produto');
    },
}


module.exports= controller