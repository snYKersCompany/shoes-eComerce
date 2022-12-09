const mongoose = require('mongoose');

function validate (str) {
    return (/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(str));
}

const ProductsSchema = mongoose.Schema({
    _id: {type: String, require: true},
    name: {type: String, require: true, validate: [validate, 'The field name cannot contain strange characters']},
  });
  const CategoryModel = mongoose.model('category', ProductsSchema);
  
  module.exports = {
    CategoryModel
  }