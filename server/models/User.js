import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(

    {   userId:{
        type: Number,
         },
         username:{
            type: String,
            required: true,
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

    }


);

const User = mongoose.model("User", UserSchema);
export default User;
