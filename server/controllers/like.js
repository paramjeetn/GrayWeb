import jwt from "jsonwebtoken";
import Like from "../models/likes.js";

export const getlikes= async (req,res)=>{
    try {
            const postId=req.query.postId;
             console.log(postId);
            const likes = await Like.find({ postId: postId }, { userId: 1, _id: 0 });
        res.status(201).json(likes);
        }
  
    catch(err){
        res.status(409).json({ message: err.message });  
    }
}