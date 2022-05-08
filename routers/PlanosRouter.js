let express = require('express');
const PlanosController = require('../controller/PlanosController');
let router = express.Router();




router.get('/planobasico',PlanosController.showPlanoBasico);
router.get('/planomedio',PlanosController.showPlanoMedio);
router.get('/planotop',PlanosController.showPlanoTop);

router.get('/produto',PlanosController.showProduto);



module.exports = router;