import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


//This middleware secures private routes by checking for valid JWT token

const secureRoute = async (req, res, next) => {
    try{

        const token = req.cookies.jwt; //get the token 

        if(!token){ //if there is not token
            return res.status(401).json({ error: "No token, authorization denied" });
        }
        // verify the token
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        if(!decoded){
            return res.status(401).json({ error: "Invalid token" });
        }
        //find the user using the decoded ID
        const user = await User.findById(decoded.userId).select("-password"); // current loggedin user
        if(!user){
            return res.status(401).json({ error: "User not found"});
        }

        //Attach user to request
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in secureRoute: " , error);
        res.status(500).json({ error: "Internal server error"});
    }
};

export default secureRoute;