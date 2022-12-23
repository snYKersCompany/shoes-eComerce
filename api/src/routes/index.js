const { Router } = require('express');
const productMiddleware = require('./ProductRoute');
const userMiddleware = require('./UserRoute');
const orderMiddleware= require('./OrderRoute');
const categoryMiddleware = require('./CategoryRoute');
const authRoutes = require('./Auth.Routes');
const reviewMiddleware = require('./ReviewRoute')
const checkoutRoute = require('./CheckoutRoute')

const router = Router();

router.use('/products', productMiddleware);
router.use('/users', userMiddleware);
router.use('/orders', orderMiddleware);
router.use('/categories', categoryMiddleware);
router.use('/auth', authRoutes);
router.use('/reviews', reviewMiddleware)
router.use('/checkouts', checkoutRoute )

module.exports = router;