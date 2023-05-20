import registerSchema from "../models/register.js";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

export const registeruser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password)
  try {
    // var hashPwd = await bcrypt.hash(password, 10);
    const user = await registerSchema.create({
      email,
      password,
    });
    res.json({ message: "Registered Successfully", user: user });
  } catch (err) {
    console.log(err);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await registerSchema.findOne({ email, password });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid User or Password",
        user: user,
      });
    }

    const token = jwt.sign({ _id: user._id }, "TRIAL");
    res
      .status(200)
      .cookie("token", token, { 
        expires: new Date(Date.now() + 600000),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "Logged In Successfully",
        token: token,
        user: user,
      });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

export const updatePassword = async (req, res) => {
  const { newpassword } = req.body;
  try {
    const user = await registerSchema.findById(req.user._id);
    user.password = newpassword;
    await user.save();
    res.json({ message: "Password updated successfully" });
  } catch (err) {
    console.log(err);
  }
};
