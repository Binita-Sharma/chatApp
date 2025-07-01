import jwt from "jsonwebtoken"

const createTokenAndSaveCookie =(userId, res) =>{
    const token = jwt.sign({ userId }, process.env.JWT_TOKEN,{
        expiresIn: "10d",
    });

    res.cookie("jwt", token, {
        httpOnly: true,         // Protect from XSS
    secure: false,          // ❗ false in localhost (true in production with HTTPS)
    sameSite: "strict"    // csrf
    //maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days
    });

};

export default createTokenAndSaveCookie;