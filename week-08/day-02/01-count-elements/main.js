'use strict';

let btn = document.querySelector('button');
let listItems = document.querySelectorAll('li');
let result = document.querySelector('.result');

btn.addEventListener('click', () =>{
  result.innerHTML =`The result is:  ${listItems.length}`;
})



