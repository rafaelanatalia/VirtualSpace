const clientVerify = function(req,res,next){
    if(!req.session.cliente){

       return res.redirect('/cliente/login');
    }
    next()
}

module.exports = clientVerify;