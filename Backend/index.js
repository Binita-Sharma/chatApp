
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./route/user.route.js";



dotenv.config(); // load .env variables
const app = express();

app.use(express.json()); //middleware to parse json from incoming requests

app.use(
  cors({
   origin: "http://localhost:5173",  // React app chal raha yahan
  credentials: true , // allow cookies from frontend
  
})
); // Allow Cross-Origin requests from frontend (Important for React communication)


app.use(cookieParser()); // Parse cookies


// Routes
app.use("/user", userRoute);

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


app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
