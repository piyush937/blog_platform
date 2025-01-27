import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Bloganza</h1>
      <p>Discover, create, and share amazing blog posts.</p>
      <Link to="/blogs" className="home-button">Explore Blogs</Link>
    </div>
  );
};

export default Home;
