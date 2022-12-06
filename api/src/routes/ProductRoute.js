const express = require('express');
const router = express.Router();
const {getProducts} = require('../controllers/Products');
const {ProductsModel} = require('../models/ModelsDB')

router.get('/', async (req, res) => {
    try {
        const products = await getProducts()
        return res.status(200).json({products: products});
    } catch (error) {
        return res.status(404).send(`El error es: ${error}`)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        
        const products = await getProducts(id)
        
        return res.status(200).json({products: products});
    } catch (error) {
        return res.status(404).send(`El error es: ${error}`)
    }
});

module.exports = router;