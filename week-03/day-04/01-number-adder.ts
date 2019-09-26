'use strict'

//Write a recursive function that takes one parameter: n and adds numbers from 1 to n.


function NumAdd(input){

    if( input <= 1 ){

        return 1
    }else{
        
        return input + NumAdd(input-1);
    };
}

console.log(NumAdd(15))