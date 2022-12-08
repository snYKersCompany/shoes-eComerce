const { OrderModel } = require('../../models/ModelsDB');

const createOrder = async (state, voucher, date) => { 
    const order = await OrderModel.create({state, voucher, date});
    return order;
}

module.exports = {
    createOrder,
};