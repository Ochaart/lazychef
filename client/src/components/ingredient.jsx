import React from 'react';
import PropTypes from 'prop-types';

const Ingredient = ({ ingredient }) => (
  <div className="ingredient">
    <div>{`${ingredient.amount.toFixed(2)} ${ingredient.measures.us.unitShort}`}</div>
    <div className="ingredient-image-container">
      <img src={ingredient.image ? `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}` : './assets/tray.png'} alt={ingredient.name} height="30" width="30" />
    </div>
    <div>{ingredient.name}</div>
  </div>
);

export default Ingredient;

Ingredient.propTypes = {
  ingredient: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    original: PropTypes.string,
    amount: PropTypes.number,
    unit: PropTypes.string,
    measures: PropTypes.shape({
      us: PropTypes.shape({
        unitShort: PropTypes.string,
      }),
    }),
  }),
};

Ingredient.defaultProps = {
  ingredient: null,
};
