import React from 'react';
import { Link } from 'react-router-dom';
import NavigationContainer from '../styles/navigation';

const Navigation = () => {
  const toTheTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <NavigationContainer>
      <Link className="link" onClick={toTheTop} to={{ pathname: '/lazychef/home' }}>Home</Link>
      {/* <Link className="link" to={{ pathname: '/lazychef/meal' }}>Meal Plan</Link> */}
      <Link className="link" to={{ pathname: '/lazychef/cookbook' }}>Cook Book</Link>
      {/* <Link className="link" to={{ pathname: '/lazychef/grocery' }}>Grocery Cart</Link> */}
      {/* <Link className="link" to={{ pathname: '/lazychef/account' }}>My Account</Link> */}
    </NavigationContainer>
  );
};

export default Navigation;
