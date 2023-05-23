import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import Router from "./routes/register.js";
import RecipeRouter from "./routes/recipe.js"

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/", Router);
app.use("/", RecipeRouter);


const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mrjanuaryx:123@cluster0.nt5nc3c.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(4000, () => {
      console.log("listening on port 4000 and connected to MongoDB");
    });
  } catch (e) {
    console.log(e);
  }
};
start();
