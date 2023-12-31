import Comment from "../models/Comment.js";
import jwt from "jsonwebtoken"
import moment from "moment"
import User from "../models/User.js";
export const getComments = async (req,res)=>{
    try {
        
        const postId=req.query.postId;
        const comment = await Comment.find({postId:postId}).sort({createdAt: -1 });
        res.status(200).json(comment);

    }
      catch (err) {
        res.status(404).json({ message: err.message });
      }

    }

    export const addComment =async(req,res)=>{
        try {
            const token=req.cookies.acessToken;
            if(!token) return res.status(401).json("Not logged in!");
            jwt.verify(token,"somesuperhardtoguessstring",async(err,userInfo)=>{
                if(err) return res.status(403).json("Token is not valid!");
                
                
                const _id=userInfo.id;
                const desc=req.body.desc;
                const postId=req.body.postId;
                console.log(postId);
                //const user = await User.findById(_id);
                
                 const newComment=new Comment({
                userId:_id,
                desc,
                postId,
                createdAt: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                
                
            });
            await newComment.save();
            const comment = await Comment.find();
            res.status(201).json(comment);
            })
           
        }
        catch(err){
            res.status(409).json({ message: err.message });  
        }
    };