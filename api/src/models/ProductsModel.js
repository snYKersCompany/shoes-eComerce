const mongoose = require('mongoose')

const ProductsSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    rating: Number,
    review: String,
    stock: Object,
    brand: Array, // Marcas
    categories: Array
  })
const ProductsModel = mongoose.model('products', ProductsSchema) //export 

module.exports = {
    ProductsModel
}
