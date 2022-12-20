const express = require('express');
const router = express.Router();
const controllers = require('../controllers/Order');

router.post("/create", controllers.createOrder);

router.get("/", controllers.getOrders);

router.get('/:id', controllers.findOrder);

router.delete('/:id', controllers.deleteOrder);

router.put('/:id', controllers.putOrder);

module.exports = router;