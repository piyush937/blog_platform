import mongoose  from 'mongoose';

// Define the schema
const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Title is required
      trim: true, // Removes extra whitespace
    },
    content: {
      type: String,
      required: true, // Content is required
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    },
    tags: {
      type: [String], // Array of strings for tags
      default: [], // Default is an empty array
    },
    status: {
      type: String,
      enum: ['draft', 'published'], // Restricts values to these options
      default: 'draft', // Default status is "draft"
    },
    thumbnail: {
      type: String, // URL for the thumbnail
      default: '', // Default is an empty string
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment', // Reference to the Comment model
      },
    ],
    likes: {
      type: Number,
      default: 0, // Default number of likes is 0
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the model
 const BlogPost= mongoose.model('BlogPost',blogPostSchema);

 export default BlogPost;







/*_id: ObjectId (default)
title: String
content: String
authorId: ObjectId (references User)
tags: [String]
status: String (e.g., "draft", "published")
thumbnail: String (URL)
comments: [ObjectId] (references Comment)
likes: Number
createdAt: Date
updatedAt: Date*/