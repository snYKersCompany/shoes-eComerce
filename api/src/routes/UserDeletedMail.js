const express = require('express');
const { userDeleted } = require('../controllers/Nodemailer/userDeleted');
const router = express.Router()
router.put('/', userDeleted);


module.exports = router;