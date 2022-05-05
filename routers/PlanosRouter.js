let express = require('express');
const { showPlanoBasico, showPlanoMedio, showPlanoTop } = require('../controller/PlanosController');
let router = express.Router();




router.get('/planobasico',showPlanoBasico);
router.get('/planomedio',showPlanoMedio);
router.get('/planotop',showPlanoTop);



module.exports = router;