const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers')

module.exports = function(){


    router.post('/productos',
        productControllers.nuevoProduto
    )

    
    router.get('/productos',
        productControllers.obtenerProductos
    )

    router.get('/productos/:id', 
        productControllers.obtenerProducto
    )

    router.put('/productos/:id',
        productControllers.actualizarProducto
    )

    router.delete('/productos/:id',
    productControllers.eliminarProducto
    )

    return router

}
