import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(

    {  
        userId:{
        type: Number,
         },
        postDesc: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },        
        creationDate:{
            type:Date,
        }


    }


);

const Post = mongoose.model("Post", UserSchema);
export default Post;
