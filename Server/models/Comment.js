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
        PostId:{  //the id given by mongoose to the specific post
            type:Number,
        }


    }


);

const Post = mongoose.model("Post", UserSchema);
export default Post;
