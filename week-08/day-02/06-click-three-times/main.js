'use strict';

let btn = document.querySelector('button');
let message = document.querySelector('#message')
let clickCounter = 0;
let counter = 0;

btn.addEventListener('click', (event) => {
  clickCounter++
  if(event.timeStamp < 5000 && clickCounter > 0){
    btn.setAttribute('disabled', true);
  }
  else if(event.timeStamp > 5000){
    if(clickCounter > 2){
      message.innerHTML = '5 seconds elapsed and clicked 3 times'
    }
  }
})
