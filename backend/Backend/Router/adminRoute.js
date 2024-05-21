const express = require('express');
const { registerAdmin, loginAdmin, logoutAdmin } = require('../Controller/adminController');
const { isAuthenticationAdmin } = require('../Middleware/auth');

const  router = express.Router();

router.route('/register').post(registerAdmin);
router.route('/login').post(loginAdmin);
router.route('/logout').get(logoutAdmin);

module.exports = router