const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    platenumber: String,
    brand: String,
    state: String
})


module.exports = mongoose.model('car', carSchema);