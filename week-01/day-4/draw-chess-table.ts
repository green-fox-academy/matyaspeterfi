'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//


let even:string = "% % % %";
let odd:string = " % % % %";
let lineCount:number = 8;

for(let i:number = 0; i < (lineCount / 2); i++){

    console.log(even);
    console.log(odd);


}