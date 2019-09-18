'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.strokeStyle = "blue";
ctx.lineTo(200, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(200, 200);
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200,200);
ctx.lineTo(50, 200);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50,200);
ctx.lineTo(50, 50);
ctx.strokeStyle = "cyan";
ctx.stroke();