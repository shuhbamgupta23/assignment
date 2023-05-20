import express from "express";
import { login, registeruser, updatePassword } from "../controller/register.js";
import { isAuthenticated } from "../middleware/auth.js";

const Router = express.Router();

Router.post("/register", registeruser);
Router.get("/login", login);
Router.patch("/updatepassword", isAuthenticated, updatePassword);

export default Router;
