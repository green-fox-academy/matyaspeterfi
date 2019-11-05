'use strict';

let candiesDisp = document.querySelector('.candies');
let candyAmount = 2000;
let candyBtn = document.querySelector('.create-candies');

let lollyBtn = document.querySelector('.buy-lollypops');
let lollyAmount = document.querySelector('.lollypops');

let makeItRain = document.querySelector('.candy-machine');

let prodDisp = document.querySelector('.speed');

let interval = 1000;
let prodRate = 3;
let lollyCount = 3;

prodDisp.innerHTML = `${prodRate}/sec`

candyBtn.addEventListener('click', () => {
  candyAmount++;
  candiesDisp.innerHTML = `${candyAmount}`
})

lollyBtn.addEventListener('click', () => {
  if (candyAmount >= 100) {
    candyAmount -= 100;
    candiesDisp.innerHTML = `${candyAmount}`;
    lollyAmount.innerHTML += '🍭';
    prodDisp.innerHTML = `${prodRate}/sec`
    lollyCount++;
  }
  if (lollyCount % 10 === 0) {
    prodRate++;
    prodDisp.innerHTML = `${prodRate}/sec`
    console.log(lollyCount % 10)
  }
})

makeItRain.addEventListener('click', () => {
  prodRate *= 10;
  prodDisp.innerHTML = `${prodRate}/sec`
})
console.log(lollyCount % 10)

let candyInterval = setInterval(() => {
  candyAmount += prodRate;
  candiesDisp.innerHTML = `${candyAmount}`
}, interval);

