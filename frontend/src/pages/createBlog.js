import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBlog } from '../services/blogService';
import './form.css';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await createBlog({ title, content }, token);
      navigate('/blogs');
    } catch (err) {
      setError('Failed to create blog');
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Create Blog</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="5"
            required
          ></textarea>
          <button type="submit">Create Blog</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
