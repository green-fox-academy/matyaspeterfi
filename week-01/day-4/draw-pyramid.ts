'use strict';

let lineCount: number = 4;
let columnCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let star:string = "*";
let space:string = "";

for (let i:number = 0; i < lineCount; i++){

    for (let j:number = 1; j < (lineCount - i); j++){

        space = (space + " ");
        
    }


    console.log(space+star);

    space = "";

    star = (star + "**");
}
