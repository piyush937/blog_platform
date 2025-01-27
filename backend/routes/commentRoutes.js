import express from 'express';
const router = express.Router();

import { createComment, getCommentsByPost, deleteComment } from '../controllers/commentController.js';
import authMiddleware from '../middlewares/authMiddleware.js'; // Add auth middleware

// Create a new comment
router.post('/', authMiddleware, createComment);

// Get comments by blog post ID
router.get('/:postId', getCommentsByPost);

// Delete a comment
router.delete('/:id', authMiddleware, deleteComment);

export default router;
