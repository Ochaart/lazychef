import React from 'react';
import PropTypes from 'prop-types';
import five from '../../../public/assets/small/small_5.png';
import fourHalf from '../../../public/assets/small/small_4_half.png';
import four from '../../../public/assets/small/small_4.png';
import threeHalf from '../../../public/assets/small/small_3_half.png';
import three from '../../../public/assets/small/small_3.png';
import twoHalf from '../../../public/assets/small/small_2_half.png';
import two from '../../../public/assets/small/small_2.png';
import oneHalf from '../../../public/assets/small/small_1_half.png';
import one from '../../../public/assets/small/small_1.png';
import zero from '../../../public/assets/small/small_0.png';

const Stars = ({ rating, reviewCount }) => {
  const returnStars = (score) => {
    if (score === 5) {
      return five;
    }
    if (score > 4 && score < 5) {
      return fourHalf;
    }
    if (score === 4) {
      return four;
    }
    if (score > 3 && score < 4) {
      return threeHalf;
    }
    if (score === 3) {
      return three;
    }
    if (score > 2 && score < 3) {
      return twoHalf;
    }
    if (score === 2) {
      return two;
    }
    if (score > 1 && score < 2) {
      return oneHalf;
    }
    if (score === 1) {
      return one;
    }
    return zero;
  };

  return (
    <div className="stars-container">
      <img src={returnStars(rating)} alt={rating} />
      <div className="count">{`Reviews: ${reviewCount}`}</div>
    </div>
  );
};

export default Stars;

Stars.propTypes = {
  rating: PropTypes.number,
  reviewCount: PropTypes.number,
};

Stars.defaultProps = {
  reviewCount: PropTypes.number,
  rating: PropTypes.number,
};
