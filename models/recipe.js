import mongoose from "mongoose";

const RECIPE = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  ingredients: {
    required: true,
    type: String,
  },
});

export const recipeSchema = mongoose.model("recipeSchema", RECIPE);
