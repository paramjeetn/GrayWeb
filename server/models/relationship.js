import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(

    {  
        userId:{
        type: Number,
         },
         followerUserId:{
            type: Array,
         },
         followedUserId:{
            type: Array,
         },
        
         
        


    }


);

const Relationship = mongoose.model("Relationship", UserSchema);
export default Relationship;