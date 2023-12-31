import Post from "../models/PostModel.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import moment from "moment";


export const createPost =async(req,res)=>{
    try {
        const token=req.cookies.acessToken;
        if(!token) return res.status(401).json("Not logged in!");
        jwt.verify(token,"somesuperhardtoguessstring",async(err,userInfo)=>{
            if(err) return res.status(403).json("Token is not valid!");
            
            
            const _id=userInfo.id;
            const desc=req.body.desc;
            const img=req.body.img;
            const user = await User.findById(_id);
             const newPost=new Post({
            userId:_id,
            desc,
            img,
            createdAt: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            name:user.name,
            
        });
        await newPost.save();
        
        
        res.status(201).json("Post created");
        })
       
        

        
    }
    catch(err){
        res.status(409).json({ message: err.message });  
    }
};
export const getPosts = async(req,res)=>{
    try {
        const token=req.cookies.acessToken;
        if(!token) return res.status(401).json("Not logged in!");
        jwt.verify(token,"somesuperhardtoguessstring",async(err,userInfo)=>{
            if(err) return res.status(403).json("Token is not valid!");
        const post = await Post.find().sort({createdAt: -1 });
        res.status(200).json(post);

    })
      } catch (err) {
        res.status(404).json({ message: err.message });
      }
}