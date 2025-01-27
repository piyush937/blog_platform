import express from "express";
import cors from "cors";
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import blogPostRoutes from './routes/blogRoutes.js';
import commentRoutes from './routes/commentRoutes.js';

import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());

app.use(cors());

connectDB();

app.get('/piyush' , (req , res)=>{
try {
    res.send("Welcone to the Bloganza");
} catch (error) {
   console.log(error); 
}
})

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', blogPostRoutes);
app.use('/api/comments', commentRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


/*app.listen(8000 , ()=>  {
console.log('listning on port 8000');
});*/