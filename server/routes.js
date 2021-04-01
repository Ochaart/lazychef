const router = require('express').Router();
const controller = require('../controllers/getRecipes');
const controller2 = require('../controllers/bookRecipe');

router.get('/getRecipes', controller.getRecipes);

router.get('/getRecipeDetails', controller.getRecipeDetails);

router.post('/addRecipe', controller2.addRecipe);

router.delete('/deleteRecipe', controller2.deleteRecipe);

router.get('/findRecipe', controller2.findRecipe);
module.exports = router;
