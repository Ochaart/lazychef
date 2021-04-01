import React from 'react';
import { Link } from 'react-router-dom';
import NavigationContainer from '../styles/navigation';

const Navigation = () => (
  <NavigationContainer>
    <Link className="link" to={{ pathname: '/' }}>Home</Link>
    <Link className="link" to={{ pathname: '/lazychef/meal' }}>Meal Plan</Link>
    <Link className="link" to={{ pathname: '/lazychef/cookbook' }}>Cook Book</Link>
    <Link className="link" to={{ pathname: '/lazychef/instacart' }}>Instacart</Link>
    <Link className="link" to={{ pathname: '/lazychef/account' }}>My Account</Link>
  </NavigationContainer>
);

export default Navigation;


// to={{ pathname: `/product/${productInfo.id}` }} className="productContainer" onClick={(event) => { event.stopPropagation(); trackInteraction(event, 'RelatedOutfit'); getProduct(productInfo.id); setTimeout(() => { window.location.reload(); }, 50); }}