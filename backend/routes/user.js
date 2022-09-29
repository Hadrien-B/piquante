const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const checkPassword = require("../middleware/check-password")
const checkEmail = require("../middleware/check-email")
const route = require('./sauces');

router.post('/signup', checkEmail, checkPassword, userCtrl.signup);
router.post('/login', userCtrl.login);


module.exports = router;