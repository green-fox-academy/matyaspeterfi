'use strict';

let { toWordConv, toNumConv} = require('./number-converter');
let test = require('tape');

test('number to text basic test', t =>{
  let actual = toWordConv(200);
  let expected = 'two hundred';
  t.equal(actual, expected);
  t.end();
});

let fart = toNumConv('twelve');
console.log(fart);


test('text to number basic test', t=>{
  let actual = toNumConv('twelve');
  let expected = 12;

  t.equal(actual, expected);
  t.end();
})
