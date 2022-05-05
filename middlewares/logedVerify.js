const logedVerify = function(req,res,next){
    if(req.session.usuario){
        next()
    }
    return res.redirect('/login')
}

module.exports = logedVerify;