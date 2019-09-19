'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

function rozi(position, size){

    for(let i = 0; i < 10; i++){
        ctx.fillStyle = "purple";
        ctx.fillRect(position + (size * i**2), position + (size * i**2), size + (size * i * 2), size + (size * i * 2));
    }

}


rozi(10, 10);