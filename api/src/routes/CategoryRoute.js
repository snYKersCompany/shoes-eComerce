const express = require('express');
const router = express.Router();
const controllers = require('../controllers/Categories');

router.get('/', async (req, res) => {
    const { name } = req.query;
    try {
        const category = await controllers.listCategories(name);
        return res.status(200).json(category);
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
});

router.post('/', async (req, res) => {
    const { name } = req.body;
    try {
        const message = await controllers.postCategory(name);
        return res.status(201).json(message);
    } catch (error) {
        return res.status(400).json(error);
    }
});

router.delete('/:name', async (req, res) => {
    const { name } = req.body;
    try {
        const message = await controllers.deleteCategory(name);
        return res.status(200).json(message);
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
});

router.get('/:name', async (req, res) => {
    const { name } = req.query;
    try {
        const category = await controllers.findCategory(name);
        return res.status(200).json(category);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

router.post('/data/json', async (req, res) => {
    let { categories } = req.body;
    try {
        const message = await controllers.postCategories(categories);
        return res.status(200).json(message);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
})


module.exports = router;