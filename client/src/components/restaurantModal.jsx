/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RestaurantCarousel from './restaurantCarousel';

const RestaurantModal = ({ restaurantDetails, setShowRestaurant }) => {
  console.log('');
  return (
    <div className="modal-container" onClick={(event) => { event.stopPropagation(); setShowRestaurant(false); }} onKeyDown={() => setShowRestaurant(false)} role="button" tabIndex={0}>
      <div className="modal" onClick={(event) => event.stopPropagation()} onKeyDown={(event) => event.stopPropagation()} role="button" tabIndex={0}>
        <div className="gallery">
          <div className="title">{restaurantDetails.name}</div>
          <RestaurantCarousel photos={restaurantDetails.photos} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantModal;

RestaurantModal.propTypes = {
  restaurantDetails: PropTypes.shape({
    alias: PropTypes.string,
    image_url: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.object),
    coordinates: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
    hours: PropTypes.arrayOf(PropTypes.object),
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
    photos: PropTypes.arrayOf(PropTypes.string),
  }),
  setShowRestaurant: PropTypes.func,
};

RestaurantModal.defaultProps = {
  restaurantDetails: null,
  setShowRestaurant: PropTypes.func,
};
