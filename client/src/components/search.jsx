import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ getRecipes }) => {
  const [food, setFood] = useState('');
  const handleChange = (event) => {
    event.preventDefault();
    setFood(event.target.value);
  };

  const search = (event) => {
    event.preventDefault();
    getRecipes(food);
    setFood('');
  };

  return (
    <form className="search" onSubmit={(event) => search(event)}>
      <label className="search-label" htmlFor="Dish">
        Dish
        <input className="search-text" type="text" value={food} onChange={(event) => handleChange(event)} />
      </label>
      <button className="search-button" type="button" onClick={(event) => search(event)}>Search</button>
    </form>
  );
};

export default Search;

Search.propTypes = {
  getRecipes: PropTypes.func,
};

Search.defaultProps = {
  getRecipes: PropTypes.func,
};
