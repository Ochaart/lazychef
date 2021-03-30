import React from 'react';
import PropTypes from 'prop-types';
import RecipeCard from './recipeCard';

const RecipeList = ({ recipes }) => (
  <div className="recipes-container">
    {recipes.map((recipe) => (
      <RecipeCard recipe={recipe} key={recipe.id} />
    ))}
  </div>
);

export default RecipeList;

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object),
};

RecipeList.defaultProps = {
  recipes: PropTypes.arrayOf(PropTypes.object),
};
