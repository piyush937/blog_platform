import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogById } from '../services/blogService';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await getBlogById(id);
      setBlog(data);
    };

    fetchBlog();
  }, [id]);

  return (
    <div className="blog-details">
      {blog ? (
        <>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogDetails;
