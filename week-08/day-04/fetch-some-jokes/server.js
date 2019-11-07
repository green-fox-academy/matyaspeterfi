'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static('./assets'));

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT} bitch!`)
});

app.get('/', (req, res) => {
  res.status(200);
  res.header('html');
  res.sendFile(__dirname + '/index.html');
});

