'use strict';

let promise = new Promise(function(resolve, reject){
  let error = new Error('I DID NOT FIRE');
  resolve('I FIRED');
  reject(error);
});

let onRejected = (error) => {
  console.log(error);
}

promise.then(console.log, onRejected);