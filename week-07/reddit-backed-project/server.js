'use strict';
let posts;

const express = require('express');
const app = express();
const PORT = 8080;

const mysql = require('mysql');

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'matpeterfi',
  password: 'password',
  database: 'reddit',
});

conn.connect((err) => {
  if (err) {
    console.log('Error connecting to Db');
    console.log(err);
    return;
  }
  console.log('Connection Established');
});

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
})

app.get('/hello', (req, res) => {
  res.status(200);
  res.send('Hello World');
})

app.get('/posts', (req, res) => {

  res.status(200);
  res.set('Content-Type', 'application/json')

  conn.query('SELECT * FROM posts;', function (err, rows) {
    if (err) {
      console.log(err.toString());
    }
    console.log('Posts data received from Db\n');
    posts = rows;
    res.send({"posts" : posts});
  })
})