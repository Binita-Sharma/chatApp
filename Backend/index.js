
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./route/user.route.js";



const app = express();
dotenv.config(); // load .env variables

app.use(express.json()); //middleware to parse json from incoming requests


app.use(cors({
   origin: "http://localhost:5173",  // React app chal raha yahan
  credentials: true  // allow cookies from frontend
  
})); // Allow Cross-Origin requests from frontend (Important for React communication)


//Middleware to parse cookies from the request headers
app.use(cookieParser());

//connect to MongoDB
const PORT = process.env.PORT || 5002;
const URI = process.env.MONGODB_URI;


//connected from mogodb database
try{

    mongoose.connect(URI);
    console.log("MongoDB Connected");

}catch (error){
    console.log(error);
}


app.use("/user", userRoute);


app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`)
});
