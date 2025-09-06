import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';

dotenv.config({ path: "./server/.env" });

const app = express();
const PORT = process.env.PORT;

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Defining the MongoDb Schema and Model
const userAuth = new mongoose.Schema({
    username: {type: String, required: true},
    email:{type: String, unique: true, required:true},
    role:{type:String, required:true, enum: ["User", "Admin"], default: "User"},
    password:{type:String, required:true, minlength:6}
});

const UserAuth = mongoose.model("UserAuth", userAuth, "User Authentication");

// API: Auth Login Route
app.post('/api/auth/login', async (req, res) => {
    try{
        const { email, selectedRole, password } = req.body;
        const user = await UserAuth.findOne({ email });

        if (!user) return res.status(400).json({ message: "User not found!" });

        const isPwdMatch = await bcrypt.compare(password, user.password);
        if (!isPwdMatch) return res.status(400).json({ message: "Invalid Credentials!" });

        if (selectedRole && selectedRole !== user.role) return res.status(400).json({message: "User not found with the specified role!"});

        res.json({
            message: "Login Successfully!",
            role: user.role,
            email: user.email,
        });

    } catch(err){
        res.status(500).json({error: err.message});
    }
});

// API: Auth Register Route
app.post('/api/auth/register', async (req, res)=>{
    try{
        const {username, email, role, password} = req.body;
        const existUser = await UserAuth.findOne({email});
        if(existUser) return res.status(400).json({message:"User already exist!"});

        const hashPwd = await bcrypt.hash(password, 10);

        const newUser = new UserAuth({username, email, role, password: hashPwd});
        await newUser.save();

        res.status(200).json({message:"User Registered Successfully!"});

    } catch(err){
        res.status(500).json({error:err.message});
    }
});

// API: Server Health checking Route
app.get('/api/health', (req, res)=>{
    res.json({message: "Server is running!"});
})

app.listen(PORT, () => {
    console.log(`Server running on  http://localhost:${PORT}`);
});