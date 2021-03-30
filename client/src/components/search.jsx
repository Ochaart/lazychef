import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ getRecipies }) => {
  const [food, setFood] = useState('');
  const handleChange = (event) => {
    event.preventDefault();
    setFood(event.target.value);
  };

  const search = (event) => {
    event.preventDefault();
    getRecipies(food);
  };

  return (
    <form className="search">
      <label htmlFor="ingredient">
        Ingredient
        <input type="text" value={food} onChange={(event) => handleChange(event)} />
      </label>
      <button className="search-button" type="button" onClick={(event) => search(event)}>Search</button>
    </form>
  );
};

export default Search;

Search.propTypes = {
  getRecipies: PropTypes.func,
};

Search.defaultProps = {
  getRecipies: PropTypes.func,
};
