import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/user.route.js";

const app = express();
dotenv.config();

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 5001;
const URI = process.env.MONGODB_URI;

try{
    mongoose.connect(URI);
    console.log("MongoDB Connected");
} catch (error) {
    console.log(error);
}

app.use("/user", userRoute);

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`);
})