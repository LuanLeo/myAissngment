var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email: {
        type: String,
        default: 'Blank'
    },
    name: {
        type: String,
        default: 'Blank'
    },
    email: {
        type: String,
        default: 'Blank'
    }
});

module.exports = mongoose.model('user', userSchema, 'user');