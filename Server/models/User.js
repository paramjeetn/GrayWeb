import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(

    {   userId:{
        type: Number,
         },
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        }

    }


);

const User = mongoose.model("User", UserSchema);
export default User;
