import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';

import authRoute from './routes/auth.js';
import { authMiddleware } from './middlewares/authMiddleware.js';


dotenv.config({ path: "./server/.env" });

const app = express();
const PORT = process.env.PORT;

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => console.log('✅Connected to MongoDB'))
    .catch((err) => console.error('❌MongoDB connection error:', err));


// API: /api/auth Routes
app.use('/api/auth', authRoute);

// API: Server Health checking Route
app.get('/api/health', (req, res)=>{
    res.json({message: "Server is running!"});
});

// API: Token verification
app.get('/api/tokenverify', authMiddleware, (req, res)=>{
    const user = req.user;
    res.json({message: "✅You are Authorized", user});
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running on  http://localhost:${PORT}`);
});