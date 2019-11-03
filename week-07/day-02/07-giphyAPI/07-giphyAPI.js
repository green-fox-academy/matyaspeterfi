let gifContainer = document.getElementById('window');
let APIkey = 'H6PwAyGijYu8BjpDlXaFzY2FftMJ00NH'
let gifList
let img = document.getElementsByTagName('img');
let counter = 0;

let APIrequest = new XMLHttpRequest();
APIrequest.onreadystatechange = console.log(APIrequest.readyState);

APIrequest.open('GET', `http://api.giphy.com/v1/gifs/search?q=cat&api_key=${APIkey}&limit=16`, true);

APIrequest.onload = function () {
  gifList = JSON.parse(APIrequest.response);
  console.log(gifList);
  for (let i = 0; i < gifList.data.length; i++) {
    renderHtml(gifList.data[i].images.original_still.url);
  }
    for(let i = 0; i < img.length; i++){
      img[i].onclick = function(){
        img[i].src = gifList.data[i].images.original.url
    }
  }
}


APIrequest.send();

function renderHtml(data) {
  counter++;
  let newIMG = document.createElement('img');
  newIMG.classList += JSON.stringify(counter);
  newIMG.src = `${data}`;
  gifContainer.appendChild(newIMG);

}

// window.onload = function(){
//   img.onclick = function(){
//     alert('click!')
//   }
// }