const mongoose = require('mongoose');
const { uuid } = require('uuidv4');
const bcrypt = require('bcryptjs');

function validateName(str) {
  return (/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(str))
}

function validateEmail(str) {
  return (/\S+@\S+\.\S+/.test(str))
}

const userSchema = mongoose.Schema({
  _id: { type: String, require: true },
  name: { type: String, validate: [validateName, 'The field name cannot contain strange characters'] },
  username: { type: String, default: "" },
  password: { type: String },
  email: { type: String, require: true, validate: [validateEmail, 'The field email must set with a valid format'] },
  phone: { type: String, default: "" },
  address: { type: String, /*validate: [validateAddress, 'It must have more than 5 characters']*/ },
  city: { type: String, default: "" },
  cp: { type: String, default: "" },
  image: { type: String, default: "https://cdn-icons-png.flaticon.com/512/25/25634.png" },
  status: { type: Boolean, default: true },
  state: { type: String },
  country: { type: String, default: "" },
  roles: [{ type: String, default: "user" }],
  favourites: [{
    ref: "products",
    type: mongoose.Schema.Types.ObjectId
  }],
  orders: [{
    ref: "orders",
    type: mongoose.Schema.Types.ObjectId
  }],
  reviews: [{
    ref: "reviews",
    type: mongoose.Schema.Types.ObjectId
  }],
  createdAt: { type: Date, default: Date.now }
}, {
  timestamps: false,
  versionKey: false
});

userSchema.statics.encryptPassword = async (password) => {
  if (!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password))) {
    throw new Error(`Password invalid, It must have 8 letters, 1 number and 1 character`);
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