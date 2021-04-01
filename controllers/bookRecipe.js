/* eslint-disable no-console */
const Recipe = require('../model/recipe');
const DB = require('../DB/recipe');

DB.on('error', () => {
  console.log('mongoose connection error');
});

DB.once('open', () => {
  console.log('mongoose connected successfully');
});

module.exports = {
  addRecipe: (req, res) => {
    Recipe.updateOne({ id: req.body.id }, req.body, { upsert: true })
      .then((result) => {
        res.status(201).send(result);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  },
  deleteRecipe: (req, res) => {
    Recipe.deleteOne({ id: req.body.id })
      .then((result) => {
        res.status(204).send(result);
      })
      .then((error) => {
        res.status(400).send(error);
      });
  },
  findRecipe: (req, res) => {
    Recipe.find({ id: req.query.id })
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  getBookRecipes: (req, res) => {
    Recipe.find({})
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  },
};
