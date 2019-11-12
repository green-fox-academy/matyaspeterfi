const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  let response = '';
  let message = '';
  console.log(req.query.message);

  if (req.query.message) {
    message = req.query.message;
    response = {
      "received": message,
      "translated": "I am Groot!"
    }
    res.status(200);
  }else{
    response = {
      "error": "I am Groot!"
    }
    res.status(401);
  }

  res.header({ 'Content-Type': "application/json" })
  res.json(response);

});

module.exports = app;