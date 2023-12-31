import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(

    {  
        userId:{
        type: String,
        required: true,
        
         },
        
        postId: {
            type: String,
            required: true,
        }


    }


);

const Like = mongoose.model("Like", UserSchema);
export default Like;