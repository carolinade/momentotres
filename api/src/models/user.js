const mongoose =require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  password: String
})

module.exports = mongoose.model('user', userSchema);