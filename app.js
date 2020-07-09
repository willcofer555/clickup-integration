const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes/routes');

const app = express();

app.use(cors({ origin: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);


/*mongoose
  .connect(
    '/mongodb/url'
  )
  .then(result => {
    app.listen(8080);
  })
  .catch(err => console.log(err)); */

  app.listen(8080);