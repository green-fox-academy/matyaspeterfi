'use strict'

export class Anagram {
  // getAnagram(input1: string, input2: string): boolean {
  //   let charCounter: number = 0;
  //   let result: boolean = false;

    // if (input1.length === input2.length) {
    //   for (let i = 0; i < input1.length; i++) {
    //     for (let j = 0; j < input2.length; j++) {
    //       if (input1.charAt(i) === input2.charAt(j)) {
    //         charCounter += 1;
            
    //       }
    //     }
    //   }
    // } else (result = false)
    // if (charCounter === input2.length) {
    //   result = true;
    // }
    // return result;
  // }

  getAnagramAlt(input1, input2){
    
    let input1Array: string[] = [];
    let input2Array: string[] = [];
    let result: boolean = false;

    input1Array = input1.split("");
    input2Array = input2.split("");

    input1Array = input1Array.sort();
    input2Array = input2Array.sort();

    input1 = input1Array.join("");
    input2 = input2Array.join("");

    if (input1 === input2){
      result = true;
    }
    return result
  }
}

let test = new Anagram;

console.log(test.getAnagramAlt("kpokersss", "sropekkss"));


