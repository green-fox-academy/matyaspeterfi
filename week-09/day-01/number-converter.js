'use strict';

const converter = require('number-to-words');
const wordConv = require('words-to-numbers');

let toWordConv = (input) => {
  let result = converter.toWords(input);
  console.log(result);
  return result;
}

let toNumConv = (input1) => {
  let result = wordConv.wordsToNumbers(input1);
  return result;
}

let fart = toNumConv('twelve');
console.log(fart);

module.exports = { toWordConv, toNumConv };