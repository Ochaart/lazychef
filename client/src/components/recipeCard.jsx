import React from 'react';
import PropTypes from 'prop-types';

const RecipeCard = ({ recipe, getRecipeDetails }) => (
  <div className="recipe-card" onClick={(event) => getRecipeDetails(event, recipe.id)} onKeyDown={(event) => getRecipeDetails(event, recipe.id)} role="button" tabIndex={0}>
    <div className="image-container">
      <img className="image" src={recipe.image} alt={recipe.title} />
    </div>
    <div className="title">{recipe.title}</div>
    {/* <div className="minutes">{recipe.readyInMinutes}</div> */}
  </div>
);

export default RecipeCard;

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    readyInMinutes: PropTypes.number,
    image: PropTypes.string,
    imageUrls: PropTypes.arrayOf(PropTypes.object),
  }),
  getRecipeDetails: PropTypes.func,
};

RecipeCard.defaultProps = {
  recipe: null,
  getRecipeDetails: PropTypes.func,
};
