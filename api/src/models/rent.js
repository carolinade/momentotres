const mongoose = require('mongoose');

const rentSchema = new mongoose.Schema({
    rentnumber: String,
    username: String,
    platenumber: String,
    created:{
        type: Date,
        default:Date.now
    }
})

module.exports = mongoose.model('rent', rentSchema);