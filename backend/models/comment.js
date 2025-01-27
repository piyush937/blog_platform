import mongoose from 'mongoose';

// Define the schema
const commentSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BlogPost', // Reference to the BlogPost model
      required: true, // A comment must be associated with a blog post
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true, // A comment must have an author
    },
    content: {
      type: String,
      required: true, // Comment content is required
      trim: true, // Removes extra whitespace
    },
    status: {
      type: String,
      enum: ['approved', 'pending'], // Restricts values to "approved" or "pending"
      default: 'pending', // Default status is "pending"
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the model

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;






/*_id: ObjectId (default)
postId: ObjectId (references BlogPost)
authorId: ObjectId (references User)
content: String
status: String (e.g., "approved", "pending")
createdAt: Date
updatedAt: Date*/ 