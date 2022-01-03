const controller={
    home:(req,res)=>{
        res.render('index')
    },
    
    listar:(req,res)=>{
       return res.render('/..index')
    }
}


module.exports= controller