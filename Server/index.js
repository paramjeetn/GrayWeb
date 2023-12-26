import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";



//config
const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true
      }
));
app.use(cookieParser());


mongoose.connect('mongodb+srv://paramjeetnpradhan:Paramjeet.826@cluster01.wmcwsfi.mongodb.net/DB2');

app.use("/Server/auth", authRoutes);
app.use("/Server/users", userRoutes); 
app.use("/Server/posts", postRoutes);
app.use("/Server/comments", commentRoutes);
app.use("/Server/likes", likeRoutes);



const PORT = 8000 || 6001;
app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

