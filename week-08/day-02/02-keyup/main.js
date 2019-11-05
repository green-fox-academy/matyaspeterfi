'use strict';

let resultField = document.getElementsByTagName('h1');

let keyUp = window.onkeyup = () => {
  console.log(window.event);
  let lastEventCode = window.event.code;
  resultField[0].innerHTML = `Last pressed key code is: ${lastEventCode}`
}

