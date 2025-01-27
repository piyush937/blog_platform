import express from 'express';
const router = express.Router();

import { createPost, getAllPosts, getPostById, updatePost, deletePost } from '../controllers/blogController.js';
import authMiddleware from '../middlewares/authMiddleware.js'; // Import the middleware
// Protect routes that require authentication
// Create a new blog post
router.post('/', authMiddleware, createPost);

// Get all blog posts
router.get('/', getAllPosts);

// Get a blog post by ID
router.get('/:id', getPostById);

// Update a blog post
router.put('/:id', authMiddleware, updatePost);

// Delete a blog post
router.delete('/:id', authMiddleware, deletePost);

export default router;
