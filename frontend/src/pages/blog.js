import React, { useEffect, useState } from 'react';
import { getAllBlogs, deleteBlog } from '../services/blogService';
import { createComment, getCommentsByPost } from '../services/commentService';
import { useNavigate } from 'react-router-dom';
import './blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    const data = await getAllBlogs();
    setBlogs(data);
  };

  const fetchComments = async (postId) => {
    const data = await getCommentsByPost(postId);
    setComments((prev) => ({ ...prev, [postId]: data }));
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    await deleteBlog(id, token);
    fetchBlogs();
  };

  const handleAddComment = async (postId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to comment.');
      return;
    }

    const data = { postId, content: newComment };
    await createComment(data, token);
    setNewComment('');
    fetchComments(postId); // Refresh comments for this blog
  };

  const handleEdit = (id) => {
    navigate(`/edit-blog/${id}`); // Redirect to edit page
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="blog-list">
      <h2>All Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog._id} className="blog-item">
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <div>
            <button onClick={() => fetchComments(blog._id)}>Show Comments</button>
            {comments[blog._id] &&
              comments[blog._id].map((comment) => (
                <div key={comment._id} className="comment">
                  <p>{comment.content}</p>
                  <small>— {comment.authorId.name}</small>
                </div>
              ))}
            <textarea
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button onClick={() => handleAddComment(blog._id)}>Add Comment</button>
          </div>

          <hr /> {/* Line Separator */}
          {localStorage.getItem('token') &&
            blog.authorId._id === JSON.parse(atob(localStorage.getItem('token').split('.')[1])).id && ( // Only show edit/delete for creator
              <div>
                <button onClick={() => handleEdit(blog._id)}>Edit</button>
                <button onClick={() => handleDelete(blog._id)}>Delete</button>
              </div>
            )}
        </div>
      ))}
    </div>
  );
};

export default Blog;

















































/*import React, { useEffect, useState } from 'react';
import { getAllBlogs } from '../services/blogService';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getAllBlogs();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-list">
      <h2>All Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog._id} className="blog-item">
          <h3>{blog.title}</h3>
          <p>{blog.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;*/
