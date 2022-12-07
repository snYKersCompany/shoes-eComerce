const mongoose = require('mongoose')
const { UUID } = require('sequelize')

const orderSchema = mongoose.Schema({
    id: UUID, 
    estados: ["pendig","complete","refused","cancelled"],
    comprobante: String,
    fecha: Date
  
  })
const orderModels = mongoose.model('order', orderSchema) //export 

module.exports = {
    orderModels
}