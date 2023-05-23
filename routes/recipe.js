import express from "express";
import {
  addRecipe,
  getAllRecipe,
  getByName,
  getOneRecipe,
} from "../controller/recipe.js";
const RecipeRouter = express.Router();

RecipeRouter.post("/addrecipe", addRecipe);
RecipeRouter.get("/getAllRecipe", getAllRecipe);
RecipeRouter.get("/getOneRecipe", getOneRecipe);
RecipeRouter.get("/getByName", getByName);

export default RecipeRouter;
