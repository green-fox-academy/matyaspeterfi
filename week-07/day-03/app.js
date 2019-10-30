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

//***********DOUBLING****************/
app.get('/doubling', (req, res) => {

  if (req.query.input) {
    let input = req.query.input;
    let result = input * 2;

    let output = {
      'received': input,
      'result': result
    }
    res.send(output);
  } else {
    res.send('Please provide an input!')
  }
})

//***********GREETER****************/

app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  if (name == undefined && title == undefined) {
    res.send({
      'error': 'Please provide a name and a title!'
    });
  }else if(title == undefined){
    res.send({
      'error' : 'Please provide a title!'
    })
  } else if(name == undefined){
    res.send({
      'error': 'Pleae provide a name!'
    })
  } else {
    res.send({
      'welcome_message': `Oh, hi there ${name}, my dear ${title}!`
    })
  }
});
