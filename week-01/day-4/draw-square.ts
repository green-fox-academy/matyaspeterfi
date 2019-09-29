'use strict';

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


'use strict'

class square{
    
    drawSquare(lineCount:number){
        let topBottomChar:string = "";
        let space:string = "";

        for(let i:number = 0; i < lineCount; i++){
            topBottomChar += "%"
        }console.log(topBottomChar)
        
        for(let j:number = 0; j < lineCount-2; j++){    
            for (let i = 0; i < lineCount-2; i++){
                space += " ";
            }console.log("%" + space + "%")
            space = ""
        }

        topBottomChar = "";
        for(let i:number = 0; i < lineCount; i++){
            topBottomChar += "%"
        }console.log(topBottomChar);
    }
}

let draw = new square;

draw.drawSquare(50)