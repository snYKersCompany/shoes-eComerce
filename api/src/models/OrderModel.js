const mongoose = require("mongoose");

// Faltan validaciones, esperando funcionalidad para ver que validaciones podemos implementar para
// el moodelo Order.

const orderSchema = mongoose.Schema({
  products: { type: Array, require: true },
  state: {
    type: String,
    default: "pending",
    enum: ["pending", "aprobed", "cancelled"],
  },
  finalAmout: { type: Number, required: true },
  date: { type: Date, default: new Date().toISOString() },
  voucher: { type: Object, default: {} },
  user:{ type:Object, required: true }
});
const OrderModel = mongoose.model("order", orderSchema); //export

module.exports = {
  OrderModel,
};
