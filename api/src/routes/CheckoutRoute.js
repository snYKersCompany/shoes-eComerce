const express = require('express');
const router = express.Router();
const { createCheckout } = require('../controllers/Checkout');


router.post("/payments", createCheckout)
  module.exports = router;