import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Ingredient from './ingredient';

const Ingredients = ({ ingredients }) => {
  const [hasLeft, setHasLeft] = useState();
  const [hasRight, setHasRight] = useState();

  return (
    <div className="ingredients-list">
      {ingredients.map((ingredient) => (
        <Ingredient ingredient={ingredient} key={ingredient.id} />
      ))}
    </div>
  );
};

export default Ingredients;

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object),
};

Ingredients.defaultProps = {
  ingredients: PropTypes.arrayOf(PropTypes.object),
};
