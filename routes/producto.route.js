const productoCtrl = require('./../controllers/producto.controller');
const express = require('express');
const router = express.Router();

router.get('/', productoCtrl.getProductos);
router.post('/', productoCtrl.createProducto);
router.get('/destacados', productoCtrl.getProductosDestacados);
router.put('/:id', productoCtrl.editProducto); 
router.get('/:id', productoCtrl.getProducto);
router.delete('/:id',productoCtrl.deleteProducto); 

module.exports = router;