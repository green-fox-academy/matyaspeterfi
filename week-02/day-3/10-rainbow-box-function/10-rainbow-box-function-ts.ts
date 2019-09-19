'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

let colors: string[] = ['blue', 'red', 'green', 'pink', 'yellow', 'cyan'];



function erno(size:number, color:string):number{
   

    for(let i = size; i >= 0; i--){

        ctx.strokeStyle = color;
        ctx.strokeRect(canvas.width/2 - size/2, canvas.height/2 - size/2, size, size);

    }


    return
};


for(let i = 50; i >= 0; i--){


    erno(1000 - (i * 50), colors[Math.floor(Math.random()*colors.length)]);
};
