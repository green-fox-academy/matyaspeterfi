const express = require('express');

const app = express();

const port = 3000;

app.listen(port);
app.use(express.static('./'));

console.log(`Listening on port ${port}`);

app.get('/', function(req, res){
  res.sendfile('index.html')
});