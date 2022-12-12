const { Router } = require('express');
const productMiddleware = require('./ProductRoute');
const userMiddleware = require('./UserRoute');
const orderMiddleware= require('./OrderRoute');
const categoryMiddleware = require('./CategoryRoute');
const router = Router();

router.use('/products', productMiddleware);
router.use('/users', userMiddleware);
router.use('/orders', orderMiddleware);
router.use('/categories', categoryMiddleware);

module.exports = router;