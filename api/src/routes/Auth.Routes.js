const express = require('express');
const router = express.Router();
const controllers = require('../controllers/Auth');
const { checkRolesExisted, checkDuplicated } = require('../middlewares');

router.post('/signUp', [checkRolesExisted, checkDuplicated], controllers.signUp);

router.post('/signIn', controllers.signIn)

module.exports = router;