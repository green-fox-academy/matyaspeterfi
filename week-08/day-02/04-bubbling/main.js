'use strict';

let nav = document.querySelector('nav');
let imageInspector = document.querySelector('.img-inspector');
let currentSize = 200;
let currentPosX = 0;
let currentPosY = 0;
console.log(imageInspector.style);

nav.addEventListener('click', (event) => {
  console.log(event.target.getAttribute('data-action'));
  let dataAction = event.target.getAttribute('data-action');
  let dataDirection = event.target.getAttribute('data-direction');
  if (dataAction == 'zoom') {
    currentSize += dataDirection == 'in' ? 10 : -10
    imageInspector.style.backgroundSize = `${currentSize}%`;
  } else if (dataAction == 'move' && dataDirection == 'left' || dataDirection == 'right') {
    currentPosX += dataDirection == 'right' ? 10 : -10;
    imageInspector.style.backgroundPositionX = `${currentPosX}%`
  } else if (dataAction == 'move' && dataDirection == 'up' || dataDirection == 'down') {
    currentPosY += dataDirection == 'down' ? 10 : -10;
    imageInspector.style.backgroundPositionY = `${currentPosY}%`

  }
})
