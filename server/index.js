/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes');

const app = express();
const port = 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/../public')));
app.use('/lazychef/*', express.static(path.join(__dirname, '/../public')));

app.use('/', router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
