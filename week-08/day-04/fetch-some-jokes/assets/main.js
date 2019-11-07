'use strict';

let button = document.getElementById('request');
let jokeCont = document.querySelector('.joke');
let URL = 'http://api.icndb.com/jokes/random';

button.addEventListener('click', ()=>{
  fetch(URL)
      .then(response => response.json())
      .then(callMeWhatever => renderHTML(callMeWhatever.value.joke))
})

function renderHTML(input){
  jokeCont.innerHTML = input;
}

// let resContent = '';

// let apiRequest = new XMLHttpRequest();

// apiRequest.open('GET','http://api.icndb.com/jokes/random', true);

// apiRequest.onload = () => {
//   resContent = JSON.parse(apiRequest.response);
//   jokeCont.innerHTML = resContent.value.joke;
//   console.log(resContent.value.joke);
// }

// apiRequest.send();

// console.log(jokeCont);