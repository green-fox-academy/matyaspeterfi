'use strict'

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0


function divideByZero(input: number){

    try{
        if(input === 0){
            //throw new Error("fail")
            throw "fail"
        }else(console.log(10/input));
    }
    
    catch(error){
        console.log(error)
    }
};

divideByZero(0);
