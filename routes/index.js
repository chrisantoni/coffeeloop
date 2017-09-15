const loginController = require("../controller/loginController.js")
const express = require('express');
const router = express.Router();

router.get('/', loginController.homeLogin);
router.get('/login',loginController.loginPage)
router.get('/home',loginController.homePage);
router.get('/profile',loginController.userPage)

module.exports = router;
