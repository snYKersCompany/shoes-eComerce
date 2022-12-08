const { Router } = require('express');
const productMiddleware = require('./ProductRoute');
const userMiddleware = require('./UserRoute');
const orderMiddleware= require('./OrderRoute');
const router = Router();

router.use('/products', productMiddleware);
router.use('/users', userMiddleware);
router.use('/orders', orderMiddleware);

module.exports = router;