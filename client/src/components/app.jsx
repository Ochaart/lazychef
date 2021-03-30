/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import Search from './search';
import RecipesList from './recipesList';

const App = () => {
  const [recipes, setRecipies] = useState([]);
  const getRecipes = (ingredient) => {
    console.log(ingredient);
    axios.get('/getRecipes', {
      params: { ingredient },
    })
      .then((recipeCollection) => {
        setRecipies(recipeCollection.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="app-container">
      <Search getRecipies={getRecipes} />
      <RecipesList recipes={recipes} />
    </div>
  );
};

export default App;
