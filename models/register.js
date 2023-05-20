import mongoose from "mongoose";

const REGISTERUSER = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const registerSchema = mongoose.model("Register", REGISTERUSER);

export default registerSchema;
