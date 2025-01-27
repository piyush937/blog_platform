import Comment from '../models/comment.js';

// Create a new comment
export const createComment = async (req, res) => {
  try {
    const { postId, content } = req.body;

    if (!postId || !content) {
        return res.status(400).json({ message: 'Post ID and content are required' });
      }
    const comment = await Comment.create({ postId, content, authorId: req.user.id });
    console.log({ postId, content, authorId: req.user.id });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get comments by blog post ID
export const getCommentsByPost = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId }).populate('authorId', 'name email');
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a comment
export const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
