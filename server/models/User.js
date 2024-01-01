import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(

    {   

         username:{
            type: String,
            required: true,
            unique: true,
         },
        name: {
            type: String,
            
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        coverPic:{
            type: String,
        },
        profilePic:{
            type: String,
        },
        city:{
            type: String,
        },
        site:{
            type:String,
        }

    }


);

const User = mongoose.model("User", UserSchema);
export default User;
