import React from 'react';
import PropTypes from 'prop-types';
import Stars from './stars';

const RestaurantCard = ({ restaurant, getRestaurantDetails }) => (
  <div className="restaurant-card" onClick={(event) => getRestaurantDetails(event, restaurant.id)} onKeyDown={(event) => getRestaurantDetails(event, restaurant.id)} role="button" tabIndex={0}>
    <div className="restaurant-image-container">
      <img className="restaurant-image" src={restaurant.image_url} alt={restaurant.alias} />
    </div>
    <div className="restaurant-ratings">
      <div className="title">{restaurant.name}</div>
      <Stars rating={restaurant.rating} reviewCount={restaurant.review_count} />
      <div className="res-category">{restaurant.categories[0].title}</div>
    </div>
  </div>
);

export default RestaurantCard;

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    alias: PropTypes.string,
    image_url: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.object),
    coordinates: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
    display_phone: PropTypes.string,
    id: PropTypes.string,
    is_closed: PropTypes.bool,
    location: PropTypes.shape({
      address1: PropTypes.string,
      address2: PropTypes.string,
      address3: PropTypes.string,
      city: PropTypes.string,
      country: PropTypes.string,
      display_address: PropTypes.arrayOf(PropTypes.string),
    }),
    name: PropTypes.string,
    phone: PropTypes.string,
    price: PropTypes.string,
    rating: PropTypes.number,
    review_count: PropTypes.number,
    transactions: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
  }),
  getRestaurantDetails: PropTypes.func,
};

RestaurantCard.defaultProps = {
  restaurant: null,
  getRestaurantDetails: PropTypes.func,
};
