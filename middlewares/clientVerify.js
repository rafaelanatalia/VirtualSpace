const clientVerify = function(req,res,next){
    if(req.session.cliente){
       
    return res.redirect('/')
    }
    next()
}

module.exports = clientVerify;