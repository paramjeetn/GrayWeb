import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(

    {  
        userId:{
        type: Number,
         },
        
        img: {
            type: String,
            required: true,
        }


    }


);

const Stories = mongoose.model("Stories", UserSchema);
export default Stories;