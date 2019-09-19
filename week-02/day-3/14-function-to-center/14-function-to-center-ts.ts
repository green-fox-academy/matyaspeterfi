'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function lineToCenter(beginX:number, beginY:number):number{

    ctx.beginPath();
    ctx.strokeStyle = "red"
    ctx.moveTo(beginX, beginY);
    ctx.lineTo(canvas.width/2, canvas.height/2);
    ctx.stroke()

    return
}


for(let i = 0; i <= (canvas.height/20); i++){
    lineToCenter(0, i *  20)
    lineToCenter(canvas.width, i * 20);
}

for(let j = 0; j < (canvas.width/20) -1 ; j++){
    lineToCenter(20 + (j * 20), 0)
    lineToCenter(20 + (j * 20), canvas.height)
}
