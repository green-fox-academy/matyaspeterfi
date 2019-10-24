const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
  console.log(req.query)
  if(req.query.name !== undefined){
  res.render('home',{
    greeting: req.query.name,
  })}else{
    res.render('home',{
      greeting: 'User',
    })
  };
});

app.listen(PORT, ()=>{
  console.log(`Listening on ${PORT}`);
})