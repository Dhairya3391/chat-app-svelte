const router = require('express').Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

// Register route
router.post('/register', authController.register);

// Login route
router.post('/login', authController.login);

// Get user profile - Protected route
router.get('/profile', auth, authController.getProfile);

module.exports = router;