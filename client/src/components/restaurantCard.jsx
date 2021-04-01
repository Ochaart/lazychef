import React from 'react';
import PropTypes from 'prop-types';
import Stars from './stars';

const RestaurantCard = ({ restaurant, getRestaurantDetails }) => (
  <div className="restaurant-card" onClick={(event) => getRestaurantDetails(event, restaurant)} onKeyDown={(event) => getRestaurantDetails(event, restaurant)} role="button" tabIndex={0}>
    <div className="restaurant-image-container">
      <img className="restaurant-image" src={restaurant.image_url} alt={restaurant.alias} />
    </div>
    <div className="restaurant-ratings">
      <div className="title">{restaurant.name}</div>
      <Stars rating={restaurant.rating} />
    </div>
  </div>
);

export default RestaurantCard;

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    rating: PropTypes.number,
    name: PropTypes.string,
    image_url: PropTypes.string,
    alias: PropTypes.string,
  }),
  getRestaurantDetails: PropTypes.func,
};

RestaurantCard.defaultProps = {
  restaurant: null,
  getRestaurantDetails: PropTypes.func,
};
