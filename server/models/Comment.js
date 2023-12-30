import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(

    { 
        userId:{
        type: Number,
         },
         commentDesc: {
            type: String,
            required: true,
        },
        
        creationDate:{
            type:Date,
        }, 
        PostId:{ 
            type:Number,
        }


    }


);

const Post = mongoose.model("Post", UserSchema);
export default Post;
