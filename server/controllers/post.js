import Post from "../models/PostModel.js";
import User from "../models/User.js";


export const createPost =async(req,res)=>{
    try {
        const _id=req.body._id
        const desc=req.body.desc
        const img=req.body.img;
        console.log(_id);

        const user = await User.findById(_id);
        const newPost=new Post({
            userId:_id,
            desc,
            img,
            creationDate: new Date(),
            name:user.name,
            
        });
        await newPost.save();
        const post = await Post.find();
        console.log(post);
        res.status(201).json(post);
    }
    catch(err){
        res.status(409).json({ message: err.message });  
    }
};
export const getPosts = async(req,res)=>{
    try {
        const post = await Post.find().sort({creationDate: -1 });
        res.status(200).json(post);
      } catch (err) {
        res.status(404).json({ message: err.message });
      }
}