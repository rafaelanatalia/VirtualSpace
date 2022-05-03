

const sessionMiddleware = function(req,res,next){
    res.locals.usuario = req.session.usuario;
    next();
}

module.exports = sessionMiddleware;