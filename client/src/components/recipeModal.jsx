/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RecipeModal = ({ recipeDetails, setShowModal }) => (
  <div className="recipe-modal-container" onClick={(event) => { event.stopPropagation(); setShowModal(false); }} onKeyDown={() => setShowModal(false)} role="button" tabIndex={0}>
    <div className="recipe-modal" onClick={(event) => event.stopPropagation()} onKeyDown={(event) => event.stopPropagation()} role="button" tabIndex={0}>
      <div className="recipe-modal-description">
        <div className="title">{recipeDetails.title}</div>
        <div className="image-container">
          <img className="image" src={recipeDetails.image} alt={recipeDetails.title} />
        </div>
        <div className="summary" dangerouslySetInnerHTML={{ __html: recipeDetails.summary }} />
        <div className="wine">{recipeDetails.winePairing.pairingText}</div>
      </div>
      <div className="recipe-modal-ingredients">
        <div className="icons-container">
          <div className="metrix-container">
            <div className="icon-container">
              <img src="./assets/score.png" className="badge" alt="heart" title="heart" width="30" height="30" />
            </div>
            {`Score: ${recipeDetails.spoonacularScore}`}
          </div>
          <div className="metrix-container">
            <div className="icon-container">
              <img src="./assets/add-group.png" className="badge" alt="servings" title="servings" width="30" height="30" />
            </div>
            {`Serves: ${recipeDetails.servings}`}
          </div>
          <div className="metrix-container">
            <div className="icon-container">
              <img src="./assets/alarm-clock.png" className="badge" alt="clock" title="clock" width="30" height="30" />
            </div>
            {`${recipeDetails.readyInMinutes} mins`}
          </div>
          <div className="metrix-container">
            <div className="icon-container">
              <img src="./assets/love.png" className="badge" alt="likes" title="likes" width="30" height="30" />
            </div>
            {`${recipeDetails.aggregateLikes}`}
          </div>
        </div>
        {recipeDetails.dairyFree ? <div>Dairy Free: ✓</div> : <div>Dairy Free: ✖</div>}
        {recipeDetails.glutenFree ? <div>Gluten Free: ✓</div> : <div>Gluten Free: ✖</div>}
        {recipeDetails.lowFodmap ? <div>Low Fod Map: ✓</div> : <div>Low Fod Map: ✖</div>}
        {recipeDetails.sustainable ? <div>Sustainable: ✓</div> : <div>Sustainable: ✖</div>}
        {recipeDetails.vegan ? <div>Vegan: ✓</div> : <div>Vegan: ✖</div>}
        {recipeDetails.vegetarian ? <div>Vegetarian: ✓</div> : <div>Vegetarian: ✖</div>}
      </div>
    </div>
  </div>
);

export default RecipeModal;

RecipeModal.propTypes = {
  recipeDetails: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    aggregateLikes: PropTypes.number,
    spoonacularScore: PropTypes.number,
    healthScore: PropTypes.number,
    readyInMinutes: PropTypes.number,
    servings: PropTypes.number,
    creditsText: PropTypes.string,
    summary: PropTypes.string,
    image: PropTypes.string,
    sourceUrl: PropTypes.string,
    dairyFree: PropTypes.bool,
    glutenFree: PropTypes.bool,
    lowFodmap: PropTypes.bool,
    sustainable: PropTypes.bool,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    winePairing: PropTypes.shape({
      pairingText: PropTypes.string,
    }),
    extendedIngredients: PropTypes.arrayOf(PropTypes.object),
  }),
  setShowModal: PropTypes.func,
};

RecipeModal.defaultProps = {
  recipeDetails: null,
  setShowModal: PropTypes.func,
};
