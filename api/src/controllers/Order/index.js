const { OrderModel } = require('../../models/ModelsDB');

const createOrder = async (_idProduct, state, voucher, date) => {
    try {
        const order = await OrderModel.create({_idProduct, state, voucher, date });
        return order;
    } catch (error) {
        console.log("Failed to create payment order")
    }
};

const getOrder = async () => {
    const order = await OrderModel.find();
    return order;
};

const findOrder = async (id) => {
    if (!id) {
        return `The ID ${id} you are looking for does not exist`;
    }
    const order = await OrderModel.findById(id);
    if (!order) {
        return `the order with the id ${id} does not exist`
    }
    return order;
};

const deleteOrder = async (id) => {
    if (!id) {
        return "The ID you are looking for does not exist";
    }
    await OrderModel.deleteOne({ _id: id });
    return `the order with the id ${id} has been deleted`;
};

const putOrder = async (id ,state, voucher) => {
    let order = await OrderModel.findById(id);
    if (!order) {
       return `The order with an id ${id} not found`;
    }
    await OrderModel.updateOne({_id: id}, {$set: {state, voucher}});
    return `The order with an id ${id} was successfully modified`;
}


module.exports = {
    createOrder,
    getOrder,
    deleteOrder,
    findOrder,
    putOrder,
};