import User from "../models/user.model.js";
import bcrypt from "bcryptjs"; //we can hash our password by these methods
import createTokenAndSaveCookie from "../jwt/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password, ConfirmPassword } = req.body;
    if (password !== ConfirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    //hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    if (newUser) {
      createTokenAndSaveCookie(newUser._id, res);
      res
        .status(201)
        .json({ message: "User registered successfully", 
          user:{
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
    },
});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(404).json({ message: "Invalid User or Password" });
    }

    createTokenAndSaveCookie(user._id, res);
    res.status(201).json({
         message: "user Logged In Successfully",
    user:{
        _id: user._id,
        name: user.name,
        email: user.email,
    },
});

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const logout = async (req, res) => {
    try {
        res.clearCookie("jwt");
        res.status(200).json({ message: "User Logged Out Successfully" });

    }
    catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
} //you can implement this part based on your requirement



export const getUserProfile = async (req, res) => {

  try{

    const loggedInUser = req.User._id;
    const filteredUsers = await User.find({_id: { $ne: loggedInUser }}).select("-password");
    res.status(200).json({filteredUsers});

  }catch(error){
    console.log("Error in allUsers Controller:" + error);
    res.status(500).json({message: "Server error"});

  }
}