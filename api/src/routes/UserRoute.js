const express = require('express');
const router = express.Router();
const controllers = require('../controllers/Users');

router.get('/', async (req, res) => {
    try {
        const users = await controllers.listUsers();
        return res.status(200).json({users: users});
    } catch (error) {
        error(console.log(error));
    }
});

module.exports = router;