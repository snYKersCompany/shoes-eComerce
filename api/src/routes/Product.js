const express = require('express');
const router = express.Router();
const controllers = require('../controllers/Products');

router.get('/products', async (req, res) => {
    const products = await controllers.listProducts();
    return res.status(200).json({products: products});
});

module.exports = router;