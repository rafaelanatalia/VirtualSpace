const PlanosController = {
    showPlanoBasico:(req,res)=>{
        res.render('paginas/planobasico');
    },
    showPlanoMedio:(req,res)=>{
        res.render('paginas/planoMedio');
    },
    showPlanoTop:(req,res)=>{
        res.render('paginas/pagina-top');
    },
    showProduto:(req,res)=>{
        res.render('adms/produto');
    }
}

module.exports = PlanosController;