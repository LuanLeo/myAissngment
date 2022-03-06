var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name: {
        type: String,
        default: 'No Name'
    },
    brand: {
        type: String,
        default: 'No Brand'
    }
});

module.exports = mongoose.model('product', productSchema, 'product');