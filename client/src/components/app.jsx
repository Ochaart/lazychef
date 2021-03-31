/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import Search from './search';
import RecipesList from './recipesList';
import AppContainer from '../styles/appContainer';
import RecipeModal from './recipeModal';

const App = () => {
  const [recipes, setRecipies] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState({});
  const [showModal, setShowModal] = useState(false);
  const getRecipes = (ingredient) => {
    axios.get('/getRecipes', {
      params: { ingredient },
    })
      .then(({ data }) => {
        setRecipies(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getRecipeDetails = (event, recipeId) => {
    event.preventDefault();
    axios.get('/getRecipeDetails', {
      params: { recipeId },
    })
      .then(({ data }) => {
        console.log(data);
        setRecipeDetails(data);
        setShowModal(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <AppContainer className="app-container">
      {showModal
        ? (
          <RecipeModal
            recipeDetails={recipeDetails}
            setShowModal={setShowModal}
          />
        )
        : null}
      <div className="navigation">
        <div>Home</div>
        <div>Meal Plan</div>
        <div>Cook Book</div>
        <div>Instacart</div>
        <div>My Account</div>
      </div>
      <div className="chef-container">
        <img className="chef" src="./assets/chef.png" alt="lazy chef" />
      </div>
      <Search getRecipies={getRecipes} />
      <RecipesList recipes={recipes} getRecipeDetails={getRecipeDetails} />
    </AppContainer>
  );
};

export default App;
