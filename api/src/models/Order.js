const mongoose = require('mongoose')
const { UUID } = require('sequelize')

const ProductsSchema = mongoose.Schema({
    id: UUID, 
    estados: ["pendig","complete","refused","cancelled"],
    comprobante: String,
    fecha: Date
  
  })
const ProductsModel = mongoose.model('order', ProductsSchema) //export 

module.exports = {
    ProductsModel
}