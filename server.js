'use strict';

const index = require('./index.html');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use('/', index);

app.listen(PORT, () => {
  console.log('Game Time');
});
