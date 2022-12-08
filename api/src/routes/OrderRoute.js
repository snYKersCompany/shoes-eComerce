const express = require('express');
const router = express.Router();
const controllers = require('../controllers/Order');

router.post("/create", async (req, res) => {
    const { _idProduct, state, voucher, date } = req.body;
    try {
        const result = await controllers.createOrder(_idProduct,state, voucher, date);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const order = await controllers.getOrder();
        return res.status(200).json({ order: order });
    } catch (error) {
        res.send({ error: error.message })
    }
});

router.get('/:id', async (req, res) => {
    const { id} = req.params;
    try {
        const order = await controllers.findOrder(id);
        return res.status(200).json(order);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await controllers.deleteOrder(id);
        return res.status(200).json(result);

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});


router.put('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const {  state, voucher, date } = req.body;
        const message = await controllers.putOrder( id , state, voucher);
        return res.status(200).json(message);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

module.exports = router;