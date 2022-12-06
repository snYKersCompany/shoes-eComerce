const { Router } = require('express');
const productMiddleware = require('./ProductRoute');
const router = Router();

router.use('/products', productMiddleware);

module.exports = router;