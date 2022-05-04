
const planVerify = function(req,res,next){
    if(res.locals.planos_id == 4){
        console.log('Não Autorizado')        
        return res.render('crud-usuarios/form-Create/create-plan');

    }
    return next();
}
module.exports = planVerify;