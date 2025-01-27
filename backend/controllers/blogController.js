import BlogPost from '../models/blogPost.js';

// Create a new blog post
export const createPost = async (req, res) => {
  try {
    const { title, content, tags, status } = req.body;
    console.log({title, content, tags, status});
    const post = await BlogPost.create({ title, content, tags, status, authorId: req.user.id });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all blog posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find().populate('authorId', 'name email');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a blog post by ID
export const getPostById = async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id).populate({
        path: 'authorId',
        select: 'name email',
        transform: (doc) => {
          if (doc) {
            const author = doc.toObject();
            author.userId = author._id; // Alias _id to userId
            delete author._id; // Remove original _id
            return author;
          }
          return null;
        },
      });
    if (!post) return res.status(404).json({ message: 'Post not found' });

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a blog post
export const updatePost = async (req, res) => {
  try {
    const post = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) return res.status(404).json({ message: 'Post not found' });

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a blog post
export const deletePost = async (req, res) => {
  try {
    const post = await BlogPost.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
