const { OrderModel } = require("../../models/ModelsDB");

const createOrder = async (req, res) => {
  try {
    const { products, finalAmount, _idUser, username } = req.body;

    if (!products || !finalAmount || !_idUser || !username) throw new Error("Faltan datos importantes");

    const newOrder = new OrderModel({ products, finalAmount, _idUser, username });
    await newOrder.save();

    return res.status(200).json(newOrder);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const getOrders = async (req, res) => {
  const { ordersSort } = req.query
  try {
    const order = await sortAdminDashboard(JSON.parse(ordersSort))
    return res.status(200).json({order: order})
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const findOrder = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error(`The ID ${id} you are looking for does not exist`);

    const order = await OrderModel.findById(id);
    if (!order) throw new Error(`the order with the id ${id} does not exist`);

    return res.status(200).json(order);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("The ID you are looking for does not exist");

    const result = await OrderModel.deleteOne({ _id: id });

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const putOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { voucher } = req.body;

    let order = await OrderModel.findById(id);
    if (!order) throw new Error(`The order with an id ${id} not found`);

    if (!voucher) throw new Error(`Falta El Dato Voucher`);

    let state = "";
    if (voucher.status === "COMPLETED") state = "aprobed";
    else state = "cancelled";

    const updateOrder = await OrderModel.updateOne(
      { _id: id },
      { $set: { state, voucher } }
    );
    return res.status(200).json(updateOrder);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};


const sortAdminDashboard = async ({orderBy}) => {
  let sort = {};
  if(orderBy) sort = orderBy
  const sortedOrders = await OrderModel.find().sort(sort)
  return sortedOrders
};


module.exports = {
  createOrder,
  getOrders,
  deleteOrder,
  findOrder,
  putOrder,
};
