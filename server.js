import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';



const app=express();
const port = process.env.PORT || 4000
connectDB();

const allowedOrigins =['http://localhost:5173', 'https://mern-auth-frontend-psi.vercel.app', 'https://mern-auth-frontend-7b6tka8dd-divya-chhabraas.vercel.app']

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials: true}));

//API ENDPOINTS
app.get('/', (req,res)=> res.send("API WORKING"));
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.listen(port, ()=> console.log(`Server started on port : ${port}`));
