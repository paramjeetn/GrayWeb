import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */
export const register = async (req, res) => {
  try {
    
      let name=req.body.name;      
      let email=req.body.email;
      let password=req.body.password;
      const user = await User.findOne({ email: email });
      if (user) return res.status(400).json({ msg: "User already exist. " });
      
      
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    console.log(hashedPassword);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      
    });
    console.log(newUser.password);
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

//LOGGING IN
export const login = async (req, res) => {
  try {
    const email=req.body.email; 
    const password = req.body.password;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, "somesuperhardtoguessstring");
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const logout=async(req,res)=>{
res.send("Hello")
};