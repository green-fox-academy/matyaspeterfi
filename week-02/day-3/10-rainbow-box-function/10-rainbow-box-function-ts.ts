'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

let colors: string[] = ['blue', 'red', 'green', 'pink', 'yellow', 'cyan'];
let squareSize: number = 30;
let squareNumber: number = canvas.width/squareSize;


function erno(size:number, color:string):number{
   


        ctx.fillStyle = color;
        ctx.fillRect(canvas.width/2 - size/2, canvas.height/2 - size/2, size, size);



    return
};

for(let i = squareNumber; i >= 0; i--){


    erno((i * squareSize), colors[Math.floor(Math.random()*colors.length)]);
};
