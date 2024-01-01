import jwt from "jsonwebtoken";
import Relationship from "../models/relationship.js";

export const getRelationship= async (req,res)=>{
    try {
            const followedUserId=req.query.followedUserId;
             
            const Relationships = await Relationship.find({ followedUserId: followedUserId }, { followerUserId: 1, _id: 0 });
        res.status(201).json(Relationships.map(relationship=>relationship.followerUserId));
        
       
        
        }
  
    catch(err){
        res.status(409).json({ message: err.message });  
    }
}

export const postRelationship = async(req,res)=>{
    try {
        const token=req.cookies.acessToken;
        if(!token) return res.status(401).json("Not logged in!");
        jwt.verify(token,"somesuperhardtoguessstring",async(err,userInfo)=>{
            if(err) return res.status(403).json("Token is not valid!");
                     console.log(req.query.UserId);      
            const newRelationship=new Relationship({
            followerUserId:userInfo.id,            
            followedUserId:req.query.UserId,           
            
        });
        const relationship = await newRelationship.save();
        
        res.status(201).json("relationship");
        })
       
    }
    catch(err){
        res.status(409).json({ message: err.message });  
    }
}
export const deleteRelationship = async(req,res)=>{
    try {
        const token=req.cookies.acessToken;
        if(!token) return res.status(401).json("Not logged in!");
        jwt.verify(token,"somesuperhardtoguessstring",async(err,userInfo)=>{
            if(err) return res.status(403).json("Token is not valid!");
                            
            const deleteRelationship={
                followerUserId:userInfo.id,            
                followedUserId:req.query.UserId,
            };
        await Relationship.deleteOne(deleteRelationship);
        
        res.status(201).json("Unfollow");
        })
       
    }
    catch(err){
        res.status(409).json({ message: err.message });  
    }
}