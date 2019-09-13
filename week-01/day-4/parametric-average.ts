'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

let input:number = 5

let store: number = 0

for(let i:number = 1; i <= input; i++){

    store = (store + i)

}

console.log("The sum is " + store)
console.log("The average is " + (store / input))

