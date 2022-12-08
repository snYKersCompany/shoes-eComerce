const express = require('express');
const router = express.Router();
const controllers = require('../controllers/Order');

router.post('/create', async (req, res) => {
    const { state, voucher, date } = req.body;
    try {
        const result = await controllers.createOrder(state, voucher, date);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
});


module.exports = router;