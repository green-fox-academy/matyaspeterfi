'use strict';

let test = require('tape');
let request = require('supertest');
let app = require('../server');

test('First test', (t) => {
  t.end();
});

test('Correct users returned', (t)=>{
  request(app)
    .get('/api/users')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      let expectedUsers = ['John', 'Betty', 'Hal'];
      t.error(err, 'No error');
      t.same(res.body, expectedUsers, 'Users as expected');
      t.end();
    });
})