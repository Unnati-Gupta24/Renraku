import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from "../jwt/generateToken.js";

export const signup = async (req,res) => {
    try {
      const { name, email, password, confirmpassword } = req.body;
      if (password !== confirmpassword) {
        return res.status(400).json({ message: "Passwords do not match" });
      }
      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ messages: "Email already exists" });
      }

    //hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Log the hashed password 
     console.log("Hashed Password:", hashedPassword); 

     const newUser = await new User({ name, email, password: hashedPassword, });

      await newUser.save();
      if(newUser){
        createTokenAndSaveCookie(newUser._id, res);
        res
        .status(201)
        .json({ message: "User registration successful", newUser });
      }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
}; 


export const login = async(req,res)=>{
  try {
    const { email, password } = req.body;
    const user = await User.findOne({email})
    const isMatch = await bcrypt.compare(password, user.password);
    if(!user || !isMatch){
      return res.status(404).json({ message: "invalid User or Password" });
    }
    createTokenAndSaveCookie(user._id, res);
    res.status(201).json({ message: "User logged in successfully", 
      user:{
        _id: user._id,
        name: user.name,
        email: user.email,
      }, });
  } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
  }
}

export const logout = async(req,res)=>{
  try {
    res.clearCookie('jwt');
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
}