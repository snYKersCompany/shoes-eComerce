const { Router } = require('express');
const productMiddleware = require('./ProductRoute');
const userMiddleware = require('./UserRoute');
const orderMiddleware = require('./OrderRoute');
const categoryMiddleware = require('./CategoryRoute');
const authRoutes = require('./Auth.Routes');
const reviewMiddleware = require('./ReviewRoute')
const checkoutRoute = require('./CheckoutRoute')
const paypalMiddleware = require('./PaypalRoute')
const SuccesMailRoute = require('./SuccesMailRoute')
const UserDeletedMail = require('./UserDeletedMail')
const UserSuspendedMail = require('./UserSuspendedMail')

const router = Router();

router.use('/products', productMiddleware);
router.use('/users', userMiddleware);
router.use('/orders', orderMiddleware);
router.use('/categories', categoryMiddleware);
router.use('/auth', authRoutes);
router.use('/reviews', reviewMiddleware)
router.use('/checkouts', checkoutRoute)
router.use('/paypal', paypalMiddleware)
router.use('/success-order', SuccesMailRoute)
router.use('/user-deleted', UserDeletedMail)
router.use('/user-suspended', UserSuspendedMail)
module.exports = router;