const router = require('express').Router();
const controller = require('../controllers/getRecipes');

router.get('/getRecipes', controller.getRecipes);

router.get('/getRecipeDetails', controller.getRecipeDetails);

module.exports = router;
