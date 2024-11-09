import User from "../models/user.model.js";

export const signup = (req,res) => {
    try {
         const { name, email, password, conformpassword } = req.body;
         if (password !== confirmpassword) {
           return res.status(400).json({ message: "Passwords do not match" });
         }
         const user = User.findOne({ email });
         if (user) {
           return res.status(400).json({ messages: "Email already exists" });
         }
         const newUser = new User({
           name,
           email,
           password,
         });
         newUser
           .save()
           .then(() => res.json({ message: "User regitrstion successful" }));
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
}