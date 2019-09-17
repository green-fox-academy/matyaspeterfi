'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;




function stringCorrect(input: string): string{

    let input2: string[] = input.split(" ");

    input2[2] = input2[2] + " always takes longer than";

    let input4: string = input2.join(" ");

    return input4;

}



console.log(stringCorrect(quote));