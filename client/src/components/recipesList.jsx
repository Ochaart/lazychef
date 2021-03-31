import React from 'react';
import PropTypes from 'prop-types';
import RecipeCard from './recipeCard';

const RecipeList = ({ recipes, getRecipeDetails }) => (
  <div className="recipes-container">
    {recipes.map((recipe) => (
      <RecipeCard recipe={recipe} key={recipe.id} getRecipeDetails={getRecipeDetails} />
    ))}
  </div>
);

export default RecipeList;

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object),
  getRecipeDetails: PropTypes.func,
};

RecipeList.defaultProps = {
  recipes: PropTypes.arrayOf(PropTypes.object),
  getRecipeDetails: PropTypes.func,
};
