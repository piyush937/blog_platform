import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const authMiddleware = async (req, res, next) => {
  try {
    // Get the token from the Authorization header
    const token = req.headers.authorization?.split(' ')[1]; // Format: "Bearer <token>"

    if (!token) return res.status(401).json({ message: 'Unauthorized: No token provided' });

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user to request object
    req.user = await User.findById(decoded.id).select('-password'); // Exclude password
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

export default authMiddleware;
