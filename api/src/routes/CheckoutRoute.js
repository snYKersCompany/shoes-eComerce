const express = require('express');
const router = express.Router();
const { createCheckout } = require('../controllers/Checkout');
router.post("/", createCheckout)
module.exports = router;