'use strict';

// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"

let loopNumber: number = 0
let honestMe: string = "I won't cheat on the exam!"

while (loopNumber < 101) {
    
    console.log(honestMe);
    loopNumber++
}

for (let loopCount:number = 0; loopCount<101; loopCount++) {
    console.log(honestMe);
}

