'use strict';

let promise = new Promise(function (resolve, reject){
  let error = new Error('REJECTED!')
  setTimeout(() => {
    reject(error);
  }, 300);
});

function onReject(error){
  console.log(error.message);
}

promise.then(null, onReject);

