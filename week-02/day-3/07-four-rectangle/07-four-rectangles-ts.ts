'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.


function geza(x:number, y:number, w:number, h:number, c1:string, c2:string, c3:string, c4:string):number{
    
    let color: string[] = [c1, c2, c3, c4];

    for(let i = 0; i <= 4; i++){

        ctx.fillStyle = color[i-1]
        ctx.fillRect(x + 50*i, y + 50*i, i*(w*1.2), i*(h*1.2));
    };

    return
};


geza(50,50,25,25, "green", "blue", "yellow", "pink")

