'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let missing: string = 'always takes longer than'

function stringCorrect(quote: string, missing: string): string {
  return quote.slice(0, 21) + missing + quote.slice(20);
}

console.log(stringCorrect(quote, missing));