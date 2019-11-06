'use strict';

let dogRadio = document.getElementById('favPetDog');
let catRadio = document.getElementById('favPetCat');
let viktorRadio = document.getElementById('favPetViktor');
let catFactsYes = document.getElementById('catFactsYes');
let catFactsNo = document.getElementById('catFactsNo');

let signUpButton = document.querySelector('#signUp');
let loveCatsButton = document.querySelector('#iLoveCats');


dogRadio.addEventListener('click', () => {
  signUpButton.removeAttribute('disabled')
})

catRadio.addEventListener('click', () => {
  signUpButton.removeAttribute('disabled')
})

viktorRadio.addEventListener('click', () => {
  signUpButton.removeAttribute('disabled')
})

catFactsYes.addEventListener('click', () => {
  loveCatsButton.removeAttribute('disabled');
})

catFactsNo.addEventListener('click', ()=>{
  loveCatsButton.setAttribute('disabled', true);
})

loveCatsButton.addEventListener('click', () => {
  alert('Thank you, you\'ve successfully signed up for cat facts')
})

signUpButton.addEventListener('click', ()=>{
  if(viktorRadio.checked == true && loveCatsButton.disabled == true){
    alert('Sigh, we still added you to the cat facts list')
  }
})



