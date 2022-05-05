const PlanosController = {
    showPlanoBasico:(req,res)=>{
        res.render('paginas/planobasico');
    },
    showPlanoMedio:(req,res)=>{
        res.render('paginas/planoMedio');
    },
    showPlanoTop:(req,res)=>{
        res.render('paginas/pagina-top');
    }
}

module.exports = PlanosController;