const { Router } = require('express');
const productMiddleware = require('./ProductRoute');
const userMiddleware = require('./UserRoute');
const router = Router();

router.use('/products', productMiddleware);
router.use('/users', userMiddleware);

module.exports = router;