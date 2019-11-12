'use strict';

let express = require('express');
let app = express();

app.get('/yondu', (req, res)=>{
  let distance = parseInt(req.query.distance);
  let time = parseInt(req.query.time);
  let speed = 0;
  let response = ''

  if((distance && time) && distance !== 0 && time !== 0){
    speed = distance/time;
    res.status(200)
    response = {
      'distance': distance,
      'time': time,
      'speed': speed,
    }
  }else{
    res.status(401)
    response = {'error': 'Please provide a distance and a time that are not 0!'}
  }


  res.json(response)
})

module.exports = app;