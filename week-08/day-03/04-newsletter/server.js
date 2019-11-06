'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const jsonParser = bodyParser();
const path = require('path');

app.use(express.static('./assets'));
app.use(jsonParser);

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});



app.get('/', (req, res) =>{
  res.sendFile(__dirname + '/index.html')
});

app.post('/signup', jsonParser, (req, res) => {
  console.log(req.body.username);
  let username = req.body.username;
  let email = req.body.email;
  let response = `Thanks ${username}, we will send updates to ${email}`

  res.send(response);
});