'use strict';

let promise1 = new Promise(function (resolve, reject){
  resolve('Fulfilled')
})

promise1.then(console.log);

let promise2 = Promise.resolve('Fulfilled via shortcut');
promise2.then(console.log);

let promise3 = new Promise(function(resolve, reject){
  reject('Rejected')
})
promise3.catch(console.log);

let promise4 = Promise.reject('Rejected via shortcut')

promise4.catch(console.log);

