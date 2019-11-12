'use strict';

let express = require('express');
let app = express();
let users = ['John', 'Betty', 'Hal'];

app.get('/api/users', (req, res) => {
  res.json(users);
});

module.exports = app;