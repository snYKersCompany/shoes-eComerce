const express = require('express');

const { userSuspended } = require('../controllers/Nodemailer/userSuspended');
const router = express.Router()

router.put('/', userSuspended);

module.exports = router;