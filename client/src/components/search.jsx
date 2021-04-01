import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ getRecipes, getRestaurants, toggle }) => {
  const [food, setFood] = useState('');
  const handleChange = (event) => {
    event.preventDefault();
    setFood(event.target.value);
  };

  const search = (event) => {
    event.preventDefault();
    getRecipes(food);
    toggle(false);
    setFood('');
  };

  const lazySearch = (event) => {
    event.preventDefault();
    getRestaurants(food);
    toggle(true);
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
  toggle: PropTypes.func,
};

Search.defaultProps = {
  getRecipes: PropTypes.func,
  getRestaurants: PropTypes.func,
  toggle: PropTypes.func,
};
