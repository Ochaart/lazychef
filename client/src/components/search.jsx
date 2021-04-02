import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ getRecipes, getRestaurants }) => {
  const [food, setFood] = useState('');
  const handleChange = (event) => {
    event.preventDefault();
    setFood(event.target.value);
  };

  const search = (event) => {
    event.preventDefault();
    event.stopPropagation();
    getRecipes(food);
    setFood('');
  };

  const lazySearch = (event) => {
    event.preventDefault();
    event.stopPropagation();
    getRestaurants(food);
    setFood('');
  };

  return (
    <form className="search" onSubmit={(event) => search(event)}>
      <label className="search-label" htmlFor="Dish">
        Dish
        <input className="search-text" type="text" value={food} onChange={(event) => handleChange(event)} />
      </label>
      <div className="button-container">
        <button className="search-button" type="button" onClick={(event) => search(event)}>Search</button>
        <button className="search-button" type="button" onClick={(event) => lazySearch(event)}>Lazy Chef</button>
      </div>
    </form>
  );
};

export default Search;

Search.propTypes = {
  getRecipes: PropTypes.func,
  getRestaurants: PropTypes.func,
};

Search.defaultProps = {
  getRecipes: PropTypes.func,
  getRestaurants: PropTypes.func,
};
