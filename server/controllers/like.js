import jwt from "jsonwebtoken";
import Like from "../models/likes.js";

export const getlikes= async (req,res)=>{
    try {
            const postId=req.query.postId;
             
            const likes = await Like.find({ postId: postId }, { userId: 1, _id: 0 });
        res.status(201).json(likes.map(like=>like.userId));
        
       
        
        }
  
    catch(err){
        res.status(409).json({ message: err.message });  
    }
}