import React from 'react';
import PropTypes from 'prop-types';

const RecipeCard = ({ recipe }) => (
  <div className="recipe-card">
    <div className="image">
      <img src={recipe.image} alt={recipe.title} />
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
};

RecipeCard.defaultProps = {
  recipe: null,
};
