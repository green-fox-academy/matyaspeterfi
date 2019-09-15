'use strict';

let lineCount: number = 15;

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

let topBottom:string = "%%%%%%";
let wall:string = "%";
let space:string = "";
let char:string = "%";


console.log(topBottom);

for (let i:number = 0; i < ((lineCount-(lineCount-1))); i++){

   for (let j:number = 0; j < (lineCount - 1); j++){

        for (let k:number = 0; k < (lineCount) + j; k++){

            space = (space + " ");
            

        }

        console.log(wall + space + char);

        space = "";
        
   }

    console.log(topBottom);

}
