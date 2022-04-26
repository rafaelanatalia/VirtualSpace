var jwt = require('jsonwebtoken');
const validaToken = (req,res,next) =>{
    if(req.headers.authorization == undefined){
        res.status(400).json({ msg : "requisição sem campo de autorização"});
    }
    let token = req.headers.authorization.replace('bearer','');
    let usuario;
    try{
        usuario = jwt.verify(token,"segredo");
    }catch(error){
        res.status(403).json({msg: error.msg});
    }

    req.usuario = usuario;
    next();
}
module.exports = validaToken;