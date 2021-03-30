/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import Search from './search';
import RecipesList from './recipesList';
import AppContainer from '../styles/appContainer';

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
    <AppContainer className="app-container">
      <div className="navigation">

      </div>
      <div className="chef-container">
        <img className="chef" src="./assets/chef.png" alt="lazy chef" />
      </div>
      <Search getRecipies={getRecipes} />
      <RecipesList recipes={recipes} />
    </AppContainer>
  );
};

export default App;
