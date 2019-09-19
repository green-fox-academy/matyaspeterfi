'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)


let randomX:number = Math.floor(Math.random() * Math.floor(canvas.width));
let randomY:number = Math.floor(Math.random() * Math.floor(canvas.height));
let starColors: string[] = ["#454545", "#666666", "#999999", "#cccccc", "#ffffff"];
let starsNum: number = 100;

console.log(randomX, randomY)


function background(start:number, width:number, height:number, color:string):number{

    ctx.fillStyle = color;
    ctx.fillRect(start, start, width, height);


    return

}


function stars(number:number){

    for(let i = number; i > 0; i--){
        
       
        let randomX:number = Math.floor(Math.random() * Math.floor(canvas.width));
        let randomY:number = Math.floor(Math.random() * Math.floor(canvas.height));
        let randomColor = starColors[Math.floor(Math.random() * Math.floor(starColors.length))]
        let starSize = number = Math.floor(Math.random() * Math.floor(7));
        ctx.fillStyle = randomColor;
        ctx.fillRect(randomX,randomY, starSize, starSize);
        
    }

}

background(0, canvas.width, canvas.height, "black");


stars(starsNum)

