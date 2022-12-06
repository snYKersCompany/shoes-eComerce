const mongoose = require('mongoose');
const { uuid } = require('uuidv4');

const ProductsSchema = mongoose.Schema({
  _id: {type: String, default: uuid},
  name: {type: String, require: true},
  email: {type: String, require: true},
  password: {type: String, require: true},
  phone: {type: String, require: true},
  address: {type: String, require: true},
  image: {type: String, require: true},
  admin: {type: Boolean, require: true}
});
const UsersModel = mongoose.model('users', ProductsSchema);

module.exports = {
  UsersModel
}