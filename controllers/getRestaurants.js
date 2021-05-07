/* eslint-disable no-console */
const axios = require('axios');
const { API_KEY } = require('./yelpconfig');

const yelpREST = axios.create({
  baseURL: 'https://api.yelp.com/v3/',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Content-type': 'application/json',
  },
});

module.exports = {
  getRestaurants: (req, res) => {
    yelpREST('/businesses/search', {
      params: {
        term: req.query.term,
        location: 'san francisco',
        categories: 'restaurants',
      },
    })
      .then(({ data }) => {
        res.status(200).send(data.businesses);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  getResDetails: (req, res) => {
    yelpREST(`/businesses/${req.query.id}`)
      .then(({ data }) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  },
};
