import { recipeSchema } from "../models/recipe.js";

export const addRecipe = async (req, res) => {
  const { name, description, ingredients } = req.body;
  try {
    const recipe = await recipeSchema.create({
      name,
      description,
      ingredients,
    });
    console.log(recipe);
    return res.json({
      message: "Ingredient added successfully",
      recipe: recipe,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllRecipe = async (req, res) => {
  try {
    const allRecipe = await recipeSchema.find({});
    console.log(allRecipe);
    return res.json({
      message: "All recipes Fetched successfully",
      recipe: allRecipe,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getOneRecipe = async (req, res) => {
  const { name } = req.body;
  try {
    const recipe = await recipeSchema.findOne({ name });
    if (!recipe) {
      return res.json({ message: "Recipe not found" });
    }

    return res.json({
      message: "Recipe fetched successfully",
      recipe: recipe,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getByName = async (req, res) => {
  const { name } = req.body;
  try {
    const recipe = await recipeSchema.find({ name });
    if (!recipe) {
      return res.json({ message: "Recipe not found" });
    }

    return res.json({
      message: "Recipe fetched successfully",
      recipe: recipe,
    });
  } catch (err) {
    console.log(err);
  }
};
