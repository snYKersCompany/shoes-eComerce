const { Router } = require('express');
const productMiddleware = require('./ProductRoute');
const userMiddleware = require('./UserRoute');
const orderMiddleware= require('./OrderRoute');
const categoryMiddleware = require('./CategoryRoute');
const authRoutes = require('./Auth.Routes');
const router = Router();

router.use('/products', productMiddleware);
router.use('/users', userMiddleware);
router.use('/orders', orderMiddleware);
router.use('/categories', categoryMiddleware);
router.use('/auth', authRoutes);

module.exports = router;