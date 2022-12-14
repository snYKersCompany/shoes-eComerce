const mongoose = require('mongoose');
const { uuid } = require('uuidv4');
const bcrypt = require('bcryptjs');

function validateName(str) {
  return (/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(str))
}

function validateEmail(str) {
  return (/\S+@\S+\.\S+/.test(str))
}

function validateAddress(str) {
  return str.length > 5;
}

const userSchema = mongoose.Schema({
  _id: { type: String, default: uuid },
  name: { type: String, require: false, validate: [validateName, 'The field name cannot contain strange characters'] },
  username: { type: String, require: false },
  email: { type: String, require: true, validate: [validateEmail, 'The field email must set with a valid format'] },
  password: { type: String, require: true },
  phone: { type: String, require: false },
  address: { type: String, require: false, validate: [validateAddress, 'It must have more than 5 characters'] },
  city: { type: String, require: false },
  image: { type: String, require: false },  
  roles: [{
    ref: "Role",
    type: mongoose.Schema.Types.ObjectId
  }],
  createdAt: { type: Date, default: Date.now }
}, {
  timestamps: false,
  versionKey: false
});

userSchema.statics.encryptPassword = async (password) => {
  if (!(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(password))) {
    throw new Error(`The password is too weak`);
  }
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt);
}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
}

const UsersModel = mongoose.model('users', userSchema);

module.exports = {
  UsersModel
}