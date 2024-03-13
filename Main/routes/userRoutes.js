const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for signing up a new user
router.post('/signup', userController.signup);

// Route for logging in
router.post('/login', userController.login);

// Route for logging out
router.post('/logout', userController.logout);

module.exports = router;
