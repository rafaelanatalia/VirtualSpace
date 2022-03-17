const express = require('express');

const router = express.Router();


const PagamentoController = require("../controller/PagamentoController");


router.get('/',PagamentoController.show)

module.exports = router;