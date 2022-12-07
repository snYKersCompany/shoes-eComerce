const mongoose = require('mongoose');
const { uuid } = require('uuidv4');

function validateName (str) {
  return (/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(str))
}

function validateEmail (str) {
  return (/\S+@\S+\.\S+/.test(str))
}

function validatePassword (str) {
  return (/^[A-Za-z]\w{7,14}$/.test(str))
}

function validateAddress (str) {
  return str.length > 5;
}

const ProductsSchema = mongoose.Schema({
  _id: {type: String, default: uuid},
  name: {type: String, require: true, validate: [validateName, 'The field name cannot contain strange characters']},
  email: {type: String, require: true, validate: [validateEmail, 'The field email must set with a valid format']},
  password: {type: String, require: true, validate: [validatePassword, 'Password too weak']},
  phone: {type: String, require: true},
  address: {type: String, require: true, validate: [validateAddress, 'It must have more than 5 characters']},
  city: {type: String, require: true},
  image: {type: String, require: true},
  admin: {type: Boolean, require: true, default: true}
});
const UsersModel = mongoose.model('users', ProductsSchema);

module.exports = {
  UsersModel
}