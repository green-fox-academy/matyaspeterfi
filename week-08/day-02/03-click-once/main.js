'use strict';

let btn = document.querySelector('button');
let clickCounter = 0;
btn.addEventListener('click', () => {
  clickCounter ++;
  if(clickCounter === 1){
    console.log(event.timeStamp)
  } else(btn.setAttribute('disabled', 'true'));
})


