const {check,validateResult,Body} = require('express-validator');

module.exports = Verificador = (req,res,next) => {
    const validateRegister = [];
    let nome = req.Body.lojanome;
    let email = req.Body.email;
    let senha = req.Body.senha;
    let senhanovamente = req.Body.senhanovamente;
    check(nome).notEmpty().withMessage('Preencha o campo Nome');
    check(email).notEmpty().withMessage('Preencha o campo Email');
    check(senha).notEmpty().withMessage('Preencha o campo Senha');
    check(senhanovamente).notEmpty().withMessage('Preencha o campo Senha Novamente');

    next();

}