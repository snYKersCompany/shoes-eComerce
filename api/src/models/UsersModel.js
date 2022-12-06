const mongoose = require('mongoose');
const { uuid } = require('uuidv4');

function validator (str) {
  return str.length > 5;
}

const ProductsSchema = mongoose.Schema({
  _id: {type: String, default: uuid},
  name: {type: String, require: true, validate: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/},
  email: {type: String, require: true},
  password: {type: String, require: true},
  phone: {type: String, require: true},
  address: {type: String, require: true, validate: [validator, 'It must have more than 5 characters']},
  image: {type: String, require: true},
  admin: {type: Boolean, require: true, default: true}
});
const UsersModel = mongoose.model('users', ProductsSchema);

module.exports = {
  UsersModel
}