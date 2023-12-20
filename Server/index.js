import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";


//config
const app = express();
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());


mongoose.connect('mongodb+srv://paramjeetnpradhan:Paramjeet.826@cluster01.wmcwsfi.mongodb.net/DB2');

app.use("/Server/auth", authRoutes);
app.use("/Server/users", userRoutes); 
app.use("/Server/posts", postRoutes);
app.use("/Server/comments", commentRoutes);
app.use("/Server/likes", likeRoutes);



const PORT = 8000 || 6001;
app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

