/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from './navigation';
import openbook from '../../../public/assets/openbook.jpg';
import RecipesList from './recipesList';
import RecipeModal from './recipeModal';
import AppContainer from '../styles/appContainer';

const Cookbook = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState({});
  const [showModal, setShowModal] = useState(false);

  const getBookRecipes = () => {
    axios.get('/getBookRecipes')
      .then(({ data }) => {
        setRecipes(data);
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

  useEffect(() => {
    getBookRecipes();
  }, []);

  useEffect(() => {
    getBookRecipes();
  }, [showModal]);

  return (
    <AppContainer>
      {showModal
        ? (
          <RecipeModal
            recipeDetails={recipeDetails}
            setShowModal={setShowModal}
          />
        )
        : null}
      <Navigation />
      <div className="book-container">
        <img className="book" src={openbook} alt="openbook" />
      </div>
      <div className="cookbook">
        <RecipesList recipes={recipes} getRecipeDetails={getRecipeDetails} />
      </div>
    </AppContainer>
  );
};

export default Cookbook;
