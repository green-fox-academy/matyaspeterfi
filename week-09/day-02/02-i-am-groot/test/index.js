'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('Groot endpoint hello query', (t)=> {
  request(app)
    .get('/groot?message=hello')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      let expectedResponse = {'received': 'hello', 'translated': 'I am Groot!'};
      t.error(err, 'No error');
      t.same(res.body, expectedResponse, 'response is as expected');
      t.end();
    })
})

test('Groot endpoint no query', (t)=> {
  request(app)
    .get('/groot')
    .expect('Content-Type', /json/)
    .expect(401)
    .end((err, res) => {
      let expectedResponse = {"error": "I am Groot!"}
      t.error(err, 'No error');
      t.same(res.body, expectedResponse, 'response is as expected');
      t.end();
    })
})