const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authController');

// Define the registration route
router.post('/register', registerUser);

// Export the router correctly
module.exports = router;
