import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

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

      await newUser
        .save()
        .then(() => res.json({ message: "User registration successful" }))
        .catch((error) => {
          console.log(error);
          res.status(500).json({ message: "Server error" });
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};