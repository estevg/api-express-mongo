const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const products = new Schema({
    nombre : {
        type: String,
        trim: true
    },
    precio : {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('Products', products);