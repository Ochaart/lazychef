const router = require('express').Router();
const controller = require('../controllers/getRecipes');
const controller2 = require('../controllers/bookRecipe');
const controller3 = require('../controllers/getRestaurants');

router.get('/getRecipes', controller.getRecipes);

router.get('/getRecipeDetails', controller.getRecipeDetails);

router.post('/addRecipe', controller2.addRecipe);

router.delete('/deleteRecipe', controller2.deleteRecipe);

router.get('/findRecipe', controller2.findRecipe);

router.get('/getBookRecipes', controller2.getBookRecipes);

router.get('/getRestaurants', controller3.getRestaurants);

router.get('/getResDetails', controller3.getResDetails);

module.exports = router;
