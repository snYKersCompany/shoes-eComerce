const express = require('express');
const { successOrder } = require('../controllers/Nodemailer/successOrder');
const router = express.Router()
router.put('/', successOrder);


module.exports = router;