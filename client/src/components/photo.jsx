import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ photo }) => (
  <div className="res-image-container">
    <img className="res-image" src={photo} alt="restaurant photos" />
  </div>
);

export default Photo;

Photo.propTypes = {
  photo: PropTypes.string,
};

Photo.defaultProps = {
  photo: PropTypes.string,
};
