let gifContainer = document.getElementById('window');
let APIkey = 'H6PwAyGijYu8BjpDlXaFzY2FftMJ00NH'
let gifList


let APIrequest = new XMLHttpRequest();
APIrequest.onreadystatechange = console.log(APIrequest.readyState);

APIrequest.open('GET', `http://api.giphy.com/v1/gifs/search?q=cat&api_key=${APIkey}&limit=16`, true);

APIrequest.onload = function () {
  gifList = JSON.parse(APIrequest.response);
  console.log(gifList);
  for (let i = 0; i < gifList.data.length; i++) {
    renderHtml(gifList.data[i].images.original.url);
  }
}
APIrequest.send();

function renderHtml(data) {

  let newIMG = document.createElement('img');
  newIMG.src = `${data}`;
  gifContainer.appendChild(newIMG);

}