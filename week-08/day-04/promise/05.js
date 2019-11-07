let promise1 = new Promise(function(resolve, reject){
  resolve('PROMISE VALUE');
})

promise1.then(console.log);

console.log('MAIN PROGRAM');