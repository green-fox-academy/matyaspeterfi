'use strict';


// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let star:string = ""
let lineCount:number= 4

for(let i:number = 0; i < lineCount; i++) {

    star = (star + "*")

    console.log(star)

}
