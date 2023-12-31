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

export const postlikes = async(req,res)=>{
    try {
        const token=req.cookies.acessToken;
        if(!token) return res.status(401).json("Not logged in!");
        jwt.verify(token,"somesuperhardtoguessstring",async(err,userInfo)=>{
            if(err) return res.status(403).json("Token is not valid!");
                            
            const newLike=new Like({
            userId:userInfo.id,            
            postId:req.body.postId,           
            
        });
        await newLike.save();
        
        res.status(201).json("Like created");
        })
       
    }
    catch(err){
        res.status(409).json({ message: err.message });  
    }
}
export const deletelikes = async(req,res)=>{
    try {
        const token=req.cookies.acessToken;
        if(!token) return res.status(401).json("Not logged in!");
        jwt.verify(token,"somesuperhardtoguessstring",async(err,userInfo)=>{
            if(err) return res.status(403).json("Token is not valid!");
                            
            const deleteLike={
            userId:userInfo.id,
            postId:req.query.postId,
            };
        await Like.deleteOne(deleteLike);
        
        res.status(201).json("Like deleted");
        })
       
    }
    catch(err){
        res.status(409).json({ message: err.message });  
    }
}