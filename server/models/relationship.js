import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(

    {  
        userId:{
        type: Number,
         },
         followerUserId:{
            type: String,
         },
         followedUserId:{
            type: String,
         },
        
         
        


    }


);

const Relationship = mongoose.model("Relationship", UserSchema);
export default Relationship;