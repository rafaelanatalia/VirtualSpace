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
    PlanoMedio:(req,res)=>{
        res.render('paginas/planoMedio');
    },
    PlanoTop:(req,res)=>{
        res.render('paginas/pagina-top');
    },

    ShowProduto:(req,res)=>{
        res.render('paginas/produto');
    },
}


module.exports= controller