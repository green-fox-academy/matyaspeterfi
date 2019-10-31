const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
app.use(express.static('assets'));

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const jsonParser = bodyParser.json();

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`)
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

//***********DOUBLING****************/
app.get('/doubling', (req, res) => {
  let output;
  if (req.query.input) {
    let input = req.query.input;
    let result = input * 2;

    output = {
      'received': input,
      'result': result
    }
  } else {
    output = 'Please provide an input!'
  }
  res.send(output)
})

//***********GREETER****************/

app.get('/greeter', (req, res) => {
  // console.log(req.query.title);
  let name = req.query['name'];
  let title = req.query.title;
  let paramsToCheck = [
    'name',
    'title'
  ];

  let missingParameters = [];

  paramsToCheck.forEach((element) => {
    if (req.query[element] == undefined) {
      missingParameters.push(element);
    }
  });

  if (missingParameters.length > 0) {
    result = {
      'error': `Please provide a ${missingParameters.join(' and a ')}!`
    };
  } else {
    result = {
      'welcome_message': `Oh, hi there ${name}, my dear ${title}!`
    }
  }
  res.send(result)


  // if (name == undefined && title == undefined) {
  //   res.send({
  //     'error': 'Please provide a name and a title!'
  //   });
  // } else if (title == undefined) {
  //   res.send({
  //     'error': 'Please provide a title!'
  //   })
  // } else if (name == undefined) {
  //   res.send({
  //     'error': 'Pleae provide a name!'
  //   })
  // } else {
  //   res.send({
  //     'welcome_message': `Oh, hi there ${name}, my dear ${title}!`
  //   })
  // } res.send(response)
});

//***********APPEND A****************//

app.get('/appenda', (req, res) => {
  res.status(404)
  res.send({
    'response': '404: Not Found'
  });
})
app.get('/appenda/:appendable', (req, res) => {
  let input = req.params.appendable;
  res.send({
    'appended': `${input}a`
  });
});

//***********DO UNTIL****************//

app.post('/dountil/:parameter', jsonParser, (req, res) => {
  let input = req.body.until;
  let parameter = req.params.parameter;
  let result;
  console.log(parameter);
  console.log(input);


  if (input == undefined) {
    result = {
      'error': 'Please provide a number!'
    }
  } else if (parameter == 'sum') {
    let total = 0;
    let sumFunc = (number) => {
      for (let i = 1; i <= number; i++) {
        total += i;
      } return total
    }
    result = {
      'result': sumFunc(input)
    }
  } else if (parameter == 'factor') {
    let factorio = (number) => {
      let total = 1
      for (let i = 1; i <= number; i++) {
        total *= i;
      }return total
    }
    result = {
      'result': factorio(input)
    }
  }
  res.send(result)
});