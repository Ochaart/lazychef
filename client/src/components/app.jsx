/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import Search from './search';
import RecipesList from './recipesList';
import AppContainer from '../styles/appContainer';
import RecipeModal from './recipeModal';
import Navigation from './navigation';
import chef from '../../../public/assets/chef.png';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState({});
  const [showModal, setShowModal] = useState(false);
  const getRecipes = (ingredient) => {
    axios.get('/getRecipes', {
      params: { ingredient },
    })
      .then(({ data }) => {
        console.log(data.results);
        setRecipes(data.results);
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
      <Navigation />
      <div className="chef-container">
        <img className="chef" src={chef} alt="lazy chef" />
      </div>
      <Search getRecipes={getRecipes} />
      <RecipesList recipes={recipes} getRecipeDetails={getRecipeDetails} />
    </AppContainer>
  );
};

export default App;
