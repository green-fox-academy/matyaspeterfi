'use strict';

let section = document.getElementsByTagName('section')[0];

let generateDivs = function (input) {
  for (let i = 1; i < input; i++) {
    let newDiv = document.createElement('div');
    section.appendChild(newDiv);
    section.children[i].textContent = `${i + 1}`;
  }
};

generateDivs(100);

let checkPrime = (num) => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
}

let counter = 0;
let sectionDivList = section.children;

let classifyPrime = (input) => {
  if (checkPrime(sectionDivList[counter].innerHTML) == true) {
    input[counter].classList.add('prime');
  } else {
    input[counter].classList.add('not-prime');
  }
  counter++
  console.log(counter);
  if (counter == 100) {
    clearInterval(mainLoop);
  }
}

// let timedClassifyAll = (input) => {
//   setInterval(classifyPrime(input), 3000);
// }
// timedClassifyAll(sectionDivList);

let mainLoop = setInterval(classifyPrime, 10, sectionDivList);


// let classifyPrimeOnAll = (input) => {
//   for (let i = 0; i < input.length; i++) {
//     if (checkPrime(input[i].innerText) == true) {
//       input[i].classList.add('prime');
//     } else {
//       input[i].classList.add('not-prime');
//     }
//   }
// }

// classifyPrimeOnAll(sectionDivList);