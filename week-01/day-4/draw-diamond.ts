'use strict';

let lineCount: number = 17;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is



let star:string = "*";
let space:string = "";
let star2:string = "*";
let space2:string = " ";

//top half of the diamond

for (let i:number = 0; i < (lineCount / 2); i++){

    for (let j:number = 1; j < ((lineCount / 2) - i); j++){

        space = (space + " ");
        
    }


    console.log(space+star);

    space = "";

    star = (star + "**");
}

//bottom half of diamond

for (let i:number = 0; i < ((lineCount / 2)-1); i++){

    for (let j:number = 1; j < (((lineCount / 2)-1) - i); j++){

        star2 = (star2 + "**");
        
    }


    console.log(space2+star2);


    star2 = "*";
    space2 = (space2 + " ");

}

