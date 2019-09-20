'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let size: number = 50;
let triangleHeight: number = Math.sqrt(3)/2*size;
let horPos: number;
let verPos: number;
let horStart: number = canvas.width/2;
let verStart: number = canvas.height-(canvas.height-50);
let columnNumber: number = canvas.width/size;
let rowNumber: number = canvas.height/triangleHeight;
let rowCounter: number = 0;
let yCoord: number = canvas.height;
let xCoord: number = 0;



function triangle(horPos, verPos, size){


    ctx.beginPath();
    ctx.strokeStyle = "black"
    ctx.moveTo(horPos,verPos);
    ctx.lineTo(horPos+size,verPos);
    ctx.lineTo(horPos+size/2,verPos-((Math.sqrt(3))/2)*size)
    ctx.lineTo(horPos, verPos);
    ctx.stroke();
}

for(let i = rowNumber; i > 0; i--){

   
    for( let j = columnNumber-rowCounter; j > 0; j--){

        triangle(xCoord, yCoord, size)

        xCoord = xCoord + size;

    }
   
   
    yCoord = yCoord - triangleHeight;
    rowCounter += 1;
    xCoord = rowCounter * (size/2);

   
};


//below are feeble attempts to hand-write triangle co-ordinates to find the pattern in how they change

//triangle(horStart, verStart, size);

//triangle(horStart-(size/2), verStart+(Math.sqrt(3))/2*size, size);
//triangle(horStart+(size/2), verStart+(Math.sqrt(3))/2*size, size);

//triangle(horStart-50, verStart+ 2*(Math.sqrt(3))/2*size, size);
//triangle(horStart, verStart+ 2*(Math.sqrt(3))/2*size, size);
//triangle(horStart+50, verStart+ 2*(Math.sqrt(3))/2*size, size);

//triangle(horStart-(size*1.5),verStart+ 3*(Math.sqrt(3))/2*size, size)
//triangle(horStart-(size*0.5),verStart+ 3*(Math.sqrt(3))/2*size, size)
//triangle(horStart+(size*0.5),verStart+ 3*(Math.sqrt(3))/2*size, size)
//triangle(horStart+(size*1.5),verStart+ 3*(Math.sqrt(3))/2*size, size)






//actual working triangle here in case I break it

//ctx.beginPath();
//ctx.moveTo(horPos,verPos);
//ctx.lineTo(horPos+size,verPos);
//ctx.lineTo(horPos+size/2,verPos-((Math.sqrt(3))/2)*size)
//ctx.lineTo(horPos, verPos);
//ctx.stroke();






//evolution of bad triangles below - thanks Jony!


//ctx.beginPath();
//ctx.moveTo(horPos,verPos+size);
//ctx.lineTo(horPos+size,verPos+size);
//ctx.lineTo(horPos+(size-(size/2)),verPos+(size/2));
//ctx.lineTo(horPos,verPos+size);

//ctx.stroke();

//ctx.beginPath();
//ctx.moveTo(horPos,verPos);
//ctx.lineTo(horPos+size,verPos+size);
//ctx.lineTo(horPos+(size-(size/2)),verPos+(size/2));
//ctx.lineTo(horPos,verPos+size);

//ctx.stroke();
