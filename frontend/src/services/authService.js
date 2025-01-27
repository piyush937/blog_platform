import axios from 'axios';

const API_URL = `${process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000'}/api/auth`;

// Register a new user
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data; // Returns user details (without password)
};

// Login a user
export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data; // Returns token and user data
};

// Get user profile
export const getProfile = async (token) => {
  const response = await axios.get(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data; // Returns user details
};
