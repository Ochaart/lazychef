import react, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const RestaurantModal = ({ restaurantDetails, setShowRestaurant }) => {

}

export default RestaurantModal;

RestaurantModal.propTypes = {
  restaurantDetails: PropTypes.shape({
    alias: PropTypes.string,
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
  setShowRestaurant: PropTypes.func,
};

RestaurantModal.defaultProps = {
  restaurantDetails: null,
  setShowRestaurant: PropTypes.func,
};
