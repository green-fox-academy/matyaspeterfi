'use strict';

// Create an application which solves the following problems.

// Which products cost less than 201? (just the name)
// Which products cost more than 150? (name + price)

let productDB = {
  Eggs: 200,
  Milk: 200,
  Fish: 400,
  Apples: 150,
  Bread: 50,
  Chicken: 550
}

let lessThan201 = (db: {}) => {
  let result: string[] = [];
  for (let [key, value] of Object.entries(db)) {
    if (value < 201) {
      result.push(key);
    }
  }
  return result;
}

console.log(lessThan201(productDB));

let moreThan150 = (db: {}) => {
  let result: {} = {};
  for (let [key, value] of Object.entries(db)) {
    if (value > 150) {
      result[key] = value;
    }
  }
  return result;
}

console.log(moreThan150(productDB));