const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
app.use(express.static('assets'));

app.listen(PORT, () => {
  console.log(`No listening on port ${PORT}`)
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', (req, res) => {

  if (req.query.input !== undefined) {
    let input = req.query.input;
    let result = input * 2;

    let output = {
      'received': input,
      'result': result
    }
    res.send(output);
  }else{
    res.send('Please provide an input!')
  }
})