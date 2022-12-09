const mongoose = require('mongoose')
const { uuid } = require('uuidv4');

// Faltan validaciones, esperando funcionalidad para ver que validaciones podemos implementar para 
// el moodelo Order.


const orderSchema = mongoose.Schema({
  _id: { type: String, default: uuid },
  _idProduct: {type: Array, require: true},
  state: { type: String, require: true, enum: ["pending", "aprobed", "refused", "cancelled"] },
  voucher: { type: String, require: true },
  date: { type: Date, require: true , default: Date}

})
const OrderModel = mongoose.model('order', orderSchema) //export 

module.exports = {
  OrderModel
}