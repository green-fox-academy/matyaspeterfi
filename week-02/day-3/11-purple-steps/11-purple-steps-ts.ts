'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

function iren(size, position){

    for(let i = 0; i < 50; i++){
        ctx.fillStyle = "purple";
        ctx.strokeStyle = "black";
        ctx.fillRect(position + (i*size)+3, position + (i*size)+3, size, size);
        ctx.strokeRect(position + (i*size)+2, position + (i*size)+2, size+1, size+1);
    };
};

iren(20, 10);