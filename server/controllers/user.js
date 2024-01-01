import jwt from "jsonwebtoken" ;
import User from "../models/User.js";

export const getUser= async(req,res)=>{
const userId=req.params.userId;
console.log(userId);
const user = await User.findOne({ _id:userId  });
console.log(user)
return res.json(user);

}