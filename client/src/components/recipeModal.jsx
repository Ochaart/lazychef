/* eslint-disable no-console */
/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Ingredients from './ingredients';
import love from '../../../public/assets/love.png';
import book from '../../../public/assets/book.png';
import clock from '../../../public/assets/alarm-clock.png';
// import planner from '../../../public/assets/planner.png';
import score from '../../../public/assets/score.png';
import serves from '../../../public/assets/add-group.png';

const RecipeModal = ({ recipeDetails, setShowModal }) => {
  const [details] = useState(recipeDetails);
  const [wasAdded, setWasAdded] = useState(false);

  const findRecipe = (id) => {
    axios.get('/findRecipe', { params: { id } })
      .then(({ data }) => {
        if (data.length !== 0) {
          setWasAdded(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    findRecipe(details.id);
  }, []);

  const handleRecipe = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!wasAdded) {
      axios.post('/addRecipe', details)
        .then(() => {
          setWasAdded(!wasAdded);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios.delete('/deleteRecipe', { data: { id: details.id } })
        .then(() => {
          setWasAdded(!wasAdded);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="modal-container" onClick={(event) => { event.stopPropagation(); setShowModal(false); }} onKeyDown={() => setShowModal(false)} role="button" tabIndex={0}>
      <div className="modal" onClick={(event) => event.stopPropagation()} onKeyDown={(event) => event.stopPropagation()} role="button" tabIndex={0}>
        <div className="recipe-modal-description">
          <div className="title">{`${recipeDetails.title}${wasAdded ? ' ✓' : ''}`}</div>
          <div className="image-container">
            <img className="image" src={recipeDetails.image} alt={recipeDetails.title} />
          </div>
          <div className="summary" dangerouslySetInnerHTML={{ __html: recipeDetails.summary.replace(/href/g, "target='_blank' href") }} />
          <div className="wine">{recipeDetails.winePairing.pairingText}</div>
          <div className="source-container">
            <div className="source">
              {`Credits: ${recipeDetails.creditsText}`}
              <br />
              <a href={recipeDetails.sourceUrl} className="source-link" target="_blank" rel="noreferrer">See Full Recipe Here!</a>
            </div>
            <div className="cookbook-meal-container">
              <div className="cookbook-container" onClick={(event) => handleRecipe(event)} onKeyDown={(event) => handleRecipe(event)} role="button" tabIndex={0}>
                <img src={book} className="badge" alt="cook book" title="cook book" width="30" height="30" />
                <div>{wasAdded ? 'Remove' : 'Add Recipe' }</div>
              </div>
              {/* <div className="meal-container">
                <img src={planner}
                 className="badge" alt="planner" title="planner" width="30" height="30" />
                <div>Schedule</div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="recipe-modal-details">
          <div className="icons-container">
            <div className="metrix-container">
              <div className="icon-container">
                <img src={score} className="badge" alt="score" title="score" width="30" height="30" />
              </div>
              {`Score: ${recipeDetails.spoonacularScore}`}
            </div>
            <div className="metrix-container">
              <div className="icon-container">
                <img src={serves} className="badge" alt="servings" title="servings" width="30" height="30" />
              </div>
              {`Serves: ${recipeDetails.servings}`}
            </div>
            <div className="metrix-container">
              <div className="icon-container">
                <img src={clock} className="badge" alt="clock" title="clock" width="30" height="30" />
              </div>
              {`${recipeDetails.readyInMinutes} mins`}
            </div>
            <div className="metrix-container">
              <div className="icon-container">
                <img src={love} className="badge" alt="likes" title="likes" width="30" height="30" />
              </div>
              {`${recipeDetails.aggregateLikes}`}
            </div>
          </div>
          <div className="facts">
            {recipeDetails.dairyFree ? <div>Dairy Free: ✓</div> : <div>Dairy Free: ✖</div>}
            {recipeDetails.glutenFree ? <div>Gluten Free: ✓</div> : <div>Gluten Free: ✖</div>}
            {recipeDetails.lowFodmap ? <div>Low Fod Map: ✓</div> : <div>Low Fod Map: ✖</div>}
            {recipeDetails.sustainable ? <div>Sustainable: ✓</div> : <div>Sustainable: ✖</div>}
            {recipeDetails.vegan ? <div>Vegan: ✓</div> : <div>Vegan: ✖</div>}
            {recipeDetails.vegetarian ? <div>Vegetarian: ✓</div> : <div>Vegetarian: ✖</div>}
          </div>
          <Ingredients ingredients={recipeDetails.extendedIngredients} />
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;

RecipeModal.propTypes = {
  recipeDetails: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    aggregateLikes: PropTypes.number,
    instructions: PropTypes.string,
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
