'use strict';

let btn = document.querySelector('button');
let message = document.querySelector('#message')
let clickInterval;
let counter = 0;

btn.addEventListener('click', () => {
  clickInterval = setInterval(changeMessage, 2000);
})

let changeMessage = () => {
  counter++;
  message.innerHTML = `2 seconds elapsed`;
  if (counter == 1) {
    clearInterval(clickInterval);
  }
}
