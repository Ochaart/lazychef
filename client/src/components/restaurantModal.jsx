/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import RestaurantCarousel from './restaurantCarousel';
import Stars from './stars';
import HoursList from './hoursList';

const RestaurantModal = ({ restaurantDetails, setShowRestaurant }) => {
  const moveSlider = (e) => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;
    const dotsNav = document.querySelector('.res-nav-dots');
    const slider = document.querySelector('.res-image-carousel');
    const dots = Array.from(dotsNav.children);
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex((dot) => dot === targetDot);
    slider.scrollLeft = 400 * targetIndex;
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
  };
  return (
    <div className="modal-container" onClick={(event) => { event.stopPropagation(); setShowRestaurant(false); }} onKeyDown={() => setShowRestaurant(false)} role="button" tabIndex={0}>
      <div className="res-modal" onClick={(event) => event.stopPropagation()} onKeyDown={(event) => event.stopPropagation()} role="button" tabIndex={0}>
        <div className="gallery">
          <RestaurantCarousel photos={restaurantDetails.photos} />
          <div className="res-nav-dots" onClick={(e) => moveSlider(e)} role="button" onKeyDown={(e) => moveSlider(e)} tabIndex={0}>
            <button className="res-carousel-indicator current-slide" type="button" aria-label="nav" />
            <button className="res-carousel-indicator" type="button" aria-label="nav" />
            <button className="res-carousel-indicator" type="button" aria-label="nav" />
          </div>
        </div>
        <div className="res-details">
          <div className="res-title">{restaurantDetails.name}</div>
          <div className="categories">
            {restaurantDetails.categories.map((category) => (
              <div key={category.title}>{category.title}</div>
            ))}
          </div>
          <Stars rating={restaurantDetails.rating} reviewCount={restaurantDetails.review_count} />
          <div className="price">{`Price: ${restaurantDetails.price}`}</div>
          <div className="display-address">
            {restaurantDetails.location.display_address.map((address) => (
              <div key={address}>{address}</div>))}
          </div>
          <div className="display-phone">{restaurantDetails.display_phone}</div>
          <div className="hours">
            <HoursList hours={restaurantDetails.hours[0].open} />
          </div>
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
