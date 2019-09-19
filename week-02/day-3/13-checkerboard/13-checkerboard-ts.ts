'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

let squareSize:number = 50;


function kati(size, positionx, positiony){

    for(let i = 0; i < 50; i++){   
        ctx.fillStyle = "black"
        ctx.fillRect(positionx + size * i, positiony + size * i, size, size);
    }

    
}

for(let j = 0; j < 50; j++){

    kati(squareSize, 0 + (100 * j), 0);

}

for(let k = 0; k < 50; k++){

    kati(squareSize, 0, 0 + (100 * k),);

}