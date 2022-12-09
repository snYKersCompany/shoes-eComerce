const mongoose = require('mongoose');
const { uuid } = require('uuidv4');

function validate (str) {
    return (/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(str));
}

const ProductsSchema = mongoose.Schema({
    _id: {type: String, require: true, default: uuid},
    name: {type: String, require: true, validate: [validate, 'The field name cannot contain strange characters']},
  });
  const CategoryModel = mongoose.model('category', ProductsSchema);
  
  module.exports = {
    CategoryModel
  }