'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000


let sideX: number = 10
let sideY: number = 8
let sideZ: number = 5

console.log("The Surface Area is " +  ((2 * (sideX * sideY)) + (2 * ( sideY * sideZ)) + (2 * (sideZ * sideX))));

console.log("The Volume is " + (sideX * sideY * sideZ))