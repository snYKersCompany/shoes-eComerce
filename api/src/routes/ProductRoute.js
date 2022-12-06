const express = require('express');
const router = express.Router();
const controllers = require('../controllers/Products');
const {ProductsModel} = require('../models/ProductsModel')

router.get('/', async (req, res) => {
    try {
        const products = await ProductsModel.find()
        return res.status(200).json({products: products});
    } catch (error) {
        error(console.log(error));
    }
});

module.exports = router;