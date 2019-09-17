'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
let reverseSplitString: string[] = [];
let splitString: string[] = [];
let reverseString: string = "";

console.log(reverse(reversed));


function reverse(input) {
    
    let splitString :string[] = input.split("");
//    console.log(splitString);
    let reverseSplitString:string[] = splitString.reverse()
//    console.log(reverseSplitString)
    let reverseString:string = reverseSplitString.join("")
    
    return reverseString;
    
}

export = reverse;