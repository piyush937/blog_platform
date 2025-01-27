import mongoose from 'mongoose';

// Define the schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Name is required
      trim: true, // Removes whitespace around the name
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensures no duplicate emails
      lowercase: true, // Converts email to lowercase
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please use a valid email address', // Email validation regex
      ],
    },
    password: {
      type: String,
      required: true,
      minlength: 8, // Minimum length for password
    },
    role: {
      type: String,
      enum: ['admin', 'author', 'reader'], // Restricts role values
      default: 'reader', // Default role
    },
    profilePicture: {
      type: String,
      default: '', // Default to an empty string if no profile picture is provided
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically sets the creation date
    },
    updatedAt: {
      type: Date,
      default: Date.now, // Automatically sets the last update date
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the model
 const User = mongoose.model('User' ,userSchema);

 export default User;









/*_id: ObjectId (default)
name: String
email: String (unique, indexed)
password: String (hashed)
role: String (e.g., "admin", "author", "reader")
profilePicture: String (URL)
createdAt: Date
updatedAt: Date*/