import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BookContainer from '../styles/bookContainer';
import Navigation from './navigation';

const Cookbook = () => {
  console.log('');
  return (
    <BookContainer>
      <Navigation />
    </BookContainer>
  );
};

export default Cookbook;
