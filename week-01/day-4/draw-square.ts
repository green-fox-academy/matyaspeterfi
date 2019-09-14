'use strict';

let lineCount: number = 25;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is


let topBottom:string = "%%%%%%"
let middle:string = "%    %"


console.log(topBottom)

for (let i:number = 0; i < ((lineCount-(lineCount-1))); i++){

    for (let j:number = 0; j < (lineCount -2); j++){

        console.log(middle);
    }

    console.log(topBottom);

}
