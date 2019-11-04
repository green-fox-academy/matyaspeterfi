//---general use variables---//
let titles;
let bookinfo;

//---express declarations---//
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
app.use(express.static('assets'));
//---mysql declarations---//
const mysql = require('mysql');

//---mysql code---//
let conn = mysql.createConnection({
  host: 'localhost',
  user: 'matpeterfi',
  password: 'password',
  database: 'bookstore'
});

conn.connect((err) => {
  if (err) {
    console.log('Error connecting to Db');
    console.log(err);
    return;
  }
  console.log('Connection Established');
});

//---express code---//

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
})

app.get('/titles', (req, res) => {
  conn.query('SELECT book_name FROM book_mast;', function(err, rows){
    if(err){
      console.log(err.toString());
    }
    console.log('Titles data received from Db\n');
    titles = rows;
    return
  })
  
  res.send(titles);
});

app.get('/', (req, res) => {
  res.send('Hello, \n please click on the links to see the results of different queries')
})

app.get('/bookinfo', (req, res) => {
  console.log(req.query[0]);

  conn.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price
  FROM book_mast LEFT JOIN author ON book_mast.aut_id = author.aut_id
  LEFT JOIN category ON book_mast.cate_id = category.cate_id
  LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id;`, function(err, rows){
    if(err){
      console.log(err.toString());
    }
    console.log('Bookinfo data received from Db\n');
    bookinfo = rows;
    return
  })
  res.send(bookinfo);
})
