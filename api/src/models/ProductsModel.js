const mongoose = require('mongoose')

const date = new Date();
const release_date = date.toLocaleDateString().split('/').reverse().join('-')

const validateString = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/

const ProductsSchema = mongoose.Schema({
  name: {type: String, require: true, validate: validateString},
  brand: {type: String, require: true, validate: validateString}, // Marcas
  category: {type: Array, default: []},
  color: {type: String, default: ''},
  gender: {type: Array, default: []},
  stock: {type: Object, require: true},  //  Tienen que tener su ruta aparte
  card_picture: {type: String, default:"", require: true},
  detail_picture: {type: String, default:"", require: true},
  original_picture: {type: String, default:""},
  release_date: {type: String, default:release_date},
  price: {type: Number, require: true},
  rating: {type: Number, default: 0}, //  Tienen que tener su ruta aparte
  description: {type: String, default:"Descripcion predeterminada"},
  sales: {type: Number, default:0}, //  Tienen que tener su ruta aparte
  review: {type: Object, default:{}}  //  Tienen que tener su ruta aparte
  })
const ProductsModel = mongoose.model('products', ProductsSchema) //export 


module.exports = {
    ProductsModel
}
