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

});


module.exports = router;