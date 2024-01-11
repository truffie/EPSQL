const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./controller/user.controller');

const app = express();


app.use(bodyParser.json());

app.use('/user', userRoute);


app.use((error, _req, res, _next) => {
  res.status(500).send(error.message);
})

module.exports = app;