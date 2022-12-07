const express = require('express');
const router = express.Router();
const {getProducts, postProduct, putProductById, deleteProductById} = require('../controllers/Products');
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

router.post('/', async (req, res) => {
    try {
        const dataProduct = req.body
        // bodi = {
                // name: String,
                // description: String,
                // price: Number,
                // image: String,
                // rating: Number,
                // review: String,
                // stock: Object,
                // brand: Array, // Marcas
                // categories: Array
        // }
        const newProduct = postProduct(dataProduct)
        return res.status(200).json(newProduct);
    } catch (error) {
        return res.status(404).send(`El error es: ${error}`)
    }
});

router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params  
        const updateData = req.body

        const updateProduct = putProductById(updateData, id)

        return res.status(200).json(updateProduct);
    } catch (error) {
        return res.status(404).send(`El error es: ${error}`)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const deleteProduct = deleteProductById(id)

        return res.status(200).json(deleteProduct);
    } catch (error) {
        return res.status(404).send(`El error es: ${error}`)
    }
})

module.exports = router;