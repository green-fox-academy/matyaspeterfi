'use strict';

let movieList = document.getElementById('movies-select');
let genreList = document.getElementById('genres-select');
let selectMovie = document.getElementById('result');

let scifimovies = ['Moon', '2001: A Space Odyssey', 'Contact']
let dramamovies = ['Darkest Hour', 'There will be blood', 'American Beauty'];
let comedymovies = ['Airplane!', 'Deadpool', 'Wayne\'s World'];


genreList.addEventListener('change', (event) => {
  while (movieList[1]) {
    movieList.removeChild(movieList[1])
  }
  if (event.target.value == 'Sci-Fi') {
    movieFiller(scifimovies);
  } else if (event.target.value == 'Drama') {
    movieFiller(dramamovies);
  } else {
    movieFiller(comedymovies);
  }
})

movieList.addEventListener('change', (event) => {
  selectMovie.innerText = `The selected movie is ${event.target.value}`
})

function movieFiller(inputList) {
  for (let i = 0; i < inputList.length; i++) {
    let option = document.createElement('option');
    option.setAttribute('value', inputList[i]);
    option.innerText = inputList[i];
    movieList.appendChild(option);
  }
}