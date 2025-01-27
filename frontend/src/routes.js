import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
import Blog from './pages/blog';
import EditBlog from './pages/editBlog';
import BlogDetails from './pages/blogDetails';
import CreateBlog from './pages/createBlog';
import NotFound from './pages/notFound';

const AppRoutes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/edit-blog/:id" element={<EditBlog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
   
  );
};

export default AppRoutes;
