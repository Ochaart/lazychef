const router = require('express').Router();
const controller = require('../controllers/getRecipes');

router.get('/getRecipes', controller.getRecipes);

module.exports = router;
