const mongoose = require('mongoose');


const schema = mongoose.Schema;

const userSchema = schema({
  name: String,
  age: String,
  sex: String
});

module.exports = mongoose.model('User', userSchema);
