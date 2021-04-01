import React from 'react';
import PropTypes from 'prop-types';
import RestaurantCard from './restaurantCard';

const RestaurantsList = ({ restaurants, getRestaurantDetails }) => (
  <div className="restaurant-container">
    {restaurants.map((restaurant) => (
      <RestaurantCard
        key={restaurant.id}
        restaurant={restaurant}
        getRestaurantDetails={getRestaurantDetails}
      />
    ))}
  </div>
);

export default RestaurantsList;

RestaurantsList.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object),
  getRestaurantDetails: PropTypes.func,
};
RestaurantsList.defaultProps = {
  restaurants: PropTypes.arrayOf(PropTypes.object),
  getRestaurantDetails: PropTypes.func,
};
