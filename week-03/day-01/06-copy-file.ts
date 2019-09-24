'use strict'

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');
let success: boolean = true;

function copyAtoB (source:string, destination:string){
    
    try{
        let fileA = fs.readFileSync(source, "utf-8");
        destination = fs.writeFileSync(destination, fileA, "utf-8");
        console.log(success);
    }catch{
        success = false;
        console.log(success);
    }

}

copyAtoB("bob.txt", "copy.txt")