const Products = require('../models/Products');

exports.nuevoProduto = async (req, res, next) => {

    const products = Products(req.body)
    try {
        await products.save();
        res.json({mensaje: 'El producto fue agregado', products})
    } catch (error) {
        console.log(error)
        next();
    }
}

exports.obtenerProductos = async (req, res, next) => {

    try {
        const products = await Products.find({})
        res.json(products);
    } catch (error) {
        console.log(error)
        next()
    }
}

// obtener un producto en especifico 
exports.obtenerProducto = async (req, res, next) => {

    try {
        const products = await Products.findById(req.params.id)
        res.json(products)
    } catch (error) {
        console.log(error)
        next();
    }

}

// Actualizar un producto
exports.actualizarProducto = async (req, res, next) => {
    try {
        const products = await Products.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true
        })
        res.json(products)
    } catch (error) {
        console.log(error)
        next();
    }

}
// Eliminar un Producto 
exports.eliminarProducto = async (req, res, next) => {
    try {
        await Products.findByIdAndRemove(req.params.id)
        res.json({mensaje: 'El producto fue eliminado'})
    } catch (error) {
        console.log(error);
        next();
    }
}