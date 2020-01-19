'use strict'

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter


function sum(a: number): number {
  let result:number = a;
  for (let i = 0; i < a; i++) {
    result += i
  }
  return result
}

console.log(sum(10));