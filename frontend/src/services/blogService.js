import axios from 'axios';

const API_URL = `${process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000'}/api/posts`;

// Fetch all blog posts
export const getAllBlogs = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data; // Returns an array of blogs
};

// Fetch a blog post by ID
export const getBlogById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data; // Returns blog details
};

// Create a new blog post
export const createBlog = async (blogData, token) => {
  const response = await axios.post(`${API_URL}`, blogData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data; // Returns the created blog post
};

// Update an existing blog post
export const updateBlog = async (id, blogData, token) => {
  const response = await axios.put(`${API_URL}/${id}`, blogData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data; // Returns the updated blog post
};

// Delete a blog post
export const deleteBlog = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data; // Returns a success message
};
