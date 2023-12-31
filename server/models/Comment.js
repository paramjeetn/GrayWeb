import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(

    { 
        userId:{
        type: String,
         },
         desc: {
            type: String,
            required: true,
        },
        
        createdAt:{
            type:Date,
        }, 
        postId:{ 
            type:String,
        }



    }

    //658a25e23c80e093d61faa61

    //6590c6a63a210c8d09686938
);

const Comment = mongoose.model("Comment", UserSchema);
export default Comment;
