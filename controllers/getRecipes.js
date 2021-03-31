/* eslint-disable no-console */
const axios = require('axios');
const { apiKey } = require('./config.js');

module.exports = {
  getRecipes: (req, res) => {
    // console.log(req.query);
    axios.request({
      method: 'GET',
      url: 'https://api.spoonacular.com/recipes/complexSearch',
      params: {
        apiKey,
        query: req.query.ingredient,
        // diet: 'vegetarian',
        // excludeIngredients: 'coconut',
        // intolerances: 'egg, gluten',
        number: '12',
        // offset: '0',
        // type: 'main course',
      },
    })
      .then((recipes) => {
        console.log(recipes.data);
        res.status(200).send(recipes.data);
      })
      .catch((error) => {
        // console.log(error);
        res.status(400).send(error);
      });
  },
  getRecipeDetails: (req, res) => {
    axios.request({
      method: 'GET',
      url: `https://api.spoonacular.com/recipes/${req.query.recipeId}/information`,
      params: {
        apiKey,
        includeNutrition: false,
      },
    })
      .then(({ data }) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  },
};
