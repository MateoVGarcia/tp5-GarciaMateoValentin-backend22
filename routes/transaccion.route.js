const transaccionCtrl = require('./../controllers/transaccion.controller');
const express = require('express');
const router = express.Router();

router.get('/', transaccionCtrl.getTransacciones);
router.post('/', transaccionCtrl.createTransaccion);
router.get('/historial/:emailCliente', transaccionCtrl.getHistorialTransaccion); 
router.get('/:monedaOrigen/:monedaDestino', transaccionCtrl.getTransaccionesPorMonedas);


module.exports = router;