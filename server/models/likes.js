import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(

    {  
        userId:{
        type: Number,
        required: true,
         },
        
        postIdostId: {
            type: Number,
            required: true,
        }


    }


);

const Likes = mongoose.model("Likes", UserSchema);
export default Likes;