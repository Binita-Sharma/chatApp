import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


//it is middleware which we are using for security purpose

const secureRoute = async (req, resizeBy, next) => {
    try{

        const token = req.cookies.jwt; //get the token 
        if(!token){ //if there is not token
            return res.status(401).json({ error: "No token, authorization denied" });
        }
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        if(!decoded){
            return res.status(401).json({ error: "Invalid token" });
        }
        const user = await User.findById(decoded.userId).select("-password"); // current loggedin user
        if(!user){
            return res.status(401).json({ error: "User not found"});
        }
        req.user = user;
        next();
    }catch(error) {
        console.log("Error in secureRoute: " , error);
        res.status(501).json({ error: "Internal server error"});
    }
};

export default secureRoute;