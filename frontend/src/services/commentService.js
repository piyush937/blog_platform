import axios from 'axios';

const API_URL =`${process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000'}/api/comments`;

// Fetch comments for a blog post
export const getCommentsByPost = async (postId) => {
  const response = await axios.get(`${API_URL}/${postId}`);
  return response.data; // Returns an array of comments
};

// Create a new comment
export const createComment = async (commentData, token) => {
  const response = await axios.post(`${API_URL}`, commentData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data; // Returns the created comment
};

// Delete a comment
export const deleteComment = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data; // Returns a success message
};
