const express = require('express');
const router = express.Router();
const {getProducts, postProduct, putProductById, deleteProductById, getProductsById} = require('../controllers/Products');
const { ProductsModel } = require('../models/ModelsDB');

router.get('/', async (req, res) => {
    try {
        const filtros = req.query
        const products = await getProducts(filtros)
        return res.status(200).json({products: products});
    } catch (error) {
        return res.status(404).send(error.message)    
    }
});

router.get('/details/:_id', async (req, res) => {
    try {
        const {_id} = req.params;  
        if (!_id) throw new Error(`It needs an _id property`);
        const products = await getProductsById(_id)
        console.log('back, ', products) 
        return res.status(200).json(products);
    } catch (error) {
        return res.status(404).send(error.message)
    }
});

router.get('/favorites/:id', async (req, res) => {
    try {
        const {id} = req.query
        const {favorite} = req.body
        const products = null
        return res.status(200).json({products: products});
    } catch (error) {
        return res.status(404).send(error.message)    
    }
});

router.post('/create', async (req, res) => {
    try {
        const dataProduct = req.body
        const newProduct = await postProduct(dataProduct)
        return res.status(200).json(newProduct);
    } catch (error) {
        return res.status(404).send(error.message)
    }
});

router.put('/modify/:id', async (req, res) => {
    try {
        const {id} = req.params  
        const updateData = req.body

        const updateProduct = await putProductById(updateData, id)

        return res.status(200).json(updateProduct);
    } catch (error) {
        return res.status(404).send(error.message)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const deleteProduct = await deleteProductById(id)

        return res.status(200).json(deleteProduct);
    } catch (error) {
        return res.status(404).send(error.message)
    }
})

module.exports = router;