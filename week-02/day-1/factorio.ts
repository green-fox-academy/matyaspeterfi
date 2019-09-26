'use strict'

// -  Create a function called `factorio`
//    that returns it's input's factorial



function factorio(input) {
    let f = 1
    for (let i = 1; i <= input; i++ ){
    
        f *= i;
    }
    return f


}

console.log(factorio(7))