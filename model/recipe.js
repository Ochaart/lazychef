const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
  id: Number,
  title: String,
  aggregateLikes: Number,
  spoonacularScore: Number,
  healthScore: Number,
  readyInMinutes: Number,
  servings: Number,
  creditsText: String,
  summary: String,
  image: String,
  sourceUrl: String,
  dairyFree: Boolean,
  glutenFree: Boolean,
  lowFodmap: Boolean,
  sustainable: Boolean,
  vegan: Boolean,
  vegetarian: Boolean,
  winePairing: {
    pairingText: String,
  },
  extendedIngredients: [{
    image: String,
    id: Number,
    name: String,
    amount: Number,
    measures: {
      us: {
        unitShort: String,
      },
    },
  }],
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
