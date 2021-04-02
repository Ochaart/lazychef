/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import Photo from './photo';

const RestaurantCarousel = ({ photos }) => {
  console.log('');
  return (
    <div className="res-image-carousel">
      {photos.map((photo) => (
        <Photo photo={photo} key={photo} />
      ))}
    </div>
  );
};

export default RestaurantCarousel;

RestaurantCarousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string),
};

RestaurantCarousel.defaultProps = {
  photos: PropTypes.arrayOf(PropTypes.string),
};
