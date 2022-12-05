const express = require('express');
const router = express.Router();
const controllers = require('../controllers/Products');

router.get('/', async (req, res) => {
    try {
        const products = await controllers.listProducts();
        return res.status(200).json({products: products});
    } catch (error) {
        error(console.log(error));
    }
});

module.exports = router;