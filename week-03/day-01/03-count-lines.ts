'use strict'

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

function countLines(input:string){

    try{
        
        let readFile = fs.readFileSync(input, "utf8");

        let splitFile = readFile.split("\n")

        console.log("The file contains " + splitFile.length + " lines");
    }catch{
        console.log(0)
    }
}
countLines("my-file0.txt")