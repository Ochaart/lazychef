/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import Search from './search';
import RecipesList from './recipesList';
import AppContainer from '../styles/appContainer';
import RecipeModal from './recipeModal';
import Navigation from './navigation';
import chef from '../../../public/assets/chef.png';
import RestaurantList from './restaurantsList';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [toggleRestOrRecipes, toggle] = useState(false);

  const getRestaurants = (event, term) => {
    axios.get('/getRestaurants', {
      params: { term },
    })
      .then(({ data }) => {
        setRestaurants(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getRecipes = (ingredient) => {
    axios.get('/getRecipes', {
      params: { ingredient },
    })
      .then(({ data }) => {
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
      <Search getRecipes={getRecipes} getRestaurants={getRestaurants} toggle={toggle} />
      {toggleRestOrRecipes ? (
        <RestaurantList
          retaurants={restaurants}
        />
      ) : (
        <RecipesList
          recipes={recipes}
          getRecipeDetails={getRecipeDetails}
        />
      )}
    </AppContainer>
  );
};

export default App;
