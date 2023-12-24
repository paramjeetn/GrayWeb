import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(

    {  
        userId:{
        type: Number,
         },
         followerUserId:{
            type: Number,
         },
         followedUserId:{
            type: Number,
         },
        
        img: {
            type: String,
            required: true,
        },        
        


    }


);

const Relationship = mongoose.model("Relationship", UserSchema);
export default Relationship;