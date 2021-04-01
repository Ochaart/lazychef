import React from 'react';
import PropTypes from 'prop-types';
import RestaurantCard from './restaurantCard';

const RestaurantsList = ({ restaurants }) => (
  <div className="restaurant-container">
    {restaurants.map((restaurant) => (
      <RestaurantCard key={restaurant.id} restaurant={restaurant} />
    ))}
  </div>
);

export default RestaurantsList;

RestaurantsList.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object),
};
RestaurantsList.defaultProps = {
  restaurants: PropTypes.arrayOf(PropTypes.object),
};
