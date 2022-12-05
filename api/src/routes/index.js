const { Router } = require('express');
const productMiddleware = require('./Product');
const router = Router();

router.use('/products', productMiddleware);

module.exports = router;