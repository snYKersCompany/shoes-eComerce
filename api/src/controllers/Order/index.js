const { OrderModel } = require("../../models/ModelsDB");

const createOrder = async (req, res) => {
  try {
    const { products, finalAmount, user, data } = req.body;

    if (!products || !finalAmount || !user || !data) throw new Error("Faltan datos importantes");

    const newOrder = postNewOrder(products, finalAmount, user, data)

    return res.status(200).json(newOrder);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

async function postNewOrder(products, finalAmount = 0, user, data) {
  try {
    console.log(products, finalAmount, user, data)
    const newOrder = new OrderModel({ products, finalAmount, user, voucher: data });
    await newOrder.save();
    console.log(newOrder)
    return newOrder;
  } catch (error) {
    console.log(error)
  }
}

const getOrders = async (req, res) => {
  try {
    const { ordersSort } = req.query

    let jsonOrdersSort = {}
    if (ordersSort) jsonOrdersSort = JSON.parse(ordersSort)

    const order = await sortAdminDashboard(jsonOrdersSort)
    return res.status(200).json({ order: order })
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};


const sortAdminDashboard = async ({ orderBy }) => {
  let sort = {};
  if (orderBy) sort = orderBy
  const sortedOrders = await OrderModel.find().sort(sort)
  return sortedOrders
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
    const { _id } = req.query
    const { id } = req.params;
    const { voucher } = req.body;

    let idOrder = ""
    if (_id) { idOrder = _id }
    console.log(idOrder)
    if (id) { idOrder = id }
    let order = await OrderModel.findById(idOrder);
    console.log(idOrder)
    if (!order) throw new Error(`The order with an id ${idOrder} not found`);

    if (!voucher) throw new Error(`Falta El Dato Voucher`);

    const updateOrder = await OrderModel.updateOne(
      { _id: idOrder },
      { $set: { state: voucher.state } }
    );
    return res.status(200).json(updateOrder);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

async function putOrderPaypal(token, _id, data) {
  let state = ''
  if (data.status === 'COMPLETED') state = 'aprobed'
  else state = 'cancelled'

  const updateOrder = await OrderModel.updateOne({
    'user.uid': _id, 'voucher.id': token
  }, {
    $set: { state, voucher: data }
  })

  return updateOrder;

}




module.exports = {
  createOrder,
  getOrders,
  deleteOrder,
  findOrder,
  putOrder,
  postNewOrder,
  putOrderPaypal,
};
