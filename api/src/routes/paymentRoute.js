const express = require('express');
const router = express.Router();

const { createOrder, captureOrder, cancelOrder } = require('../controllers/Payments/index');

router.post('/create-order', createOrder )

router.get('/capture-order', captureOrder )

router.get('/cancel-order', cancelOrder )


module.exports = router;