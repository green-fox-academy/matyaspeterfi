'use strict'

let test = require('tape');
let request = require('supertest');
let app = require('../server');

test('Correct query test', (t)=>{
  request(app)
    .get('/yondu?time=10&distance=100')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res)=>{
      let expectedResponse = {
        'distance': 100,
        'time': 10,
        'speed': 10,
      }
      t.error(err, 'No error')
      t.same(res.body, expectedResponse, 'Correct response as expected')
      t.end();
    })
}) 

test('time query=0 test', (t)=>{
  request(app)
    .get('/yondu?time=0&distance=100')
    .expect('Content-Type', /json/)
    .expect(401)
    .end((err, res)=>{
      let expectedResponse = {
        'error': 'Please provide a distance and a time that are not 0!'
      }
      t.error(err, 'No error')
      t.same(res.body, expectedResponse, 'Error expected, requesting 2 queries that are not 0')
      t.end();
    })
}) 

test('distance query=0 test', (t)=>{
  request(app)
    .get('/yondu?time=10&distance=0')
    .expect('Content-Type', /json/)
    .expect(401)
    .end((err, res)=>{
      let expectedResponse = {
        'error': 'Please provide a distance and a time that are not 0!'
      }
      t.error(err, 'No error')
      t.same(res.body, expectedResponse, 'Error expected, requesting 2 queries that are not 0')
      t.end();
    })
}) 

test('Missing time query test ', (t)=>{
  request(app)
    .get('/yondu?distance=100')
    .expect('Content-Type', /json/)
    .expect(401)
    .end((err, res)=>{
      let expectedResponse = {
        'error': 'Please provide a distance and a time that are not 0!'
      }
      t.error(err, 'No error')
      t.same(res.body, expectedResponse, 'Error expected, requesting 2 queries that are not 0')
      t.end();
    })
}) 

test('Missing distance query test ', (t)=>{
  request(app)
    .get('/yondu?time=100')
    .expect('Content-Type', /json/)
    .expect(401)
    .end((err, res)=>{
      let expectedResponse = {
        'error': 'Please provide a distance and a time that are not 0!'
      }
      t.error(err, 'No error')
      t.same(res.body, expectedResponse, 'Error expected, requesting 2 queries that are not 0')
      t.end();
    })
}) 