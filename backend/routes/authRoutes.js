import express from 'express';
const router = express.Router();
import { getUserProfile } from '../controllers/authController.js';

import { registerUser, loginUser } from '../controllers/authController.js';
import authMiddleware  from '../middlewares/authMiddleware.js';

// Register a new user
router.post('/register', registerUser);

// Login a user
router.post('/login', loginUser);

// Get user profile (requires authentication)
router.get('/profile',authMiddleware, getUserProfile);

export default router;

/*module.exports = router;*/
