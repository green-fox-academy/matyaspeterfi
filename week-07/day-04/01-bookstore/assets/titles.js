let titlesReq = new XMLHttpRequest;
let responseData = '';
let titleList = document.getElementById('booktitles')

titlesReq.open('GET', 'http://localhost:3000/titles', true);

titlesReq.onload = () => {
  responseData = JSON.parse(titlesReq.response);
  console.log(responseData[0].book_name)
  renderHTML(responseData);
}

titlesReq.send();

let renderHTML = (input) => {
  for (let i = 0; i < input.length; i++) {
    let title = document.createElement('li');
    title.innerText = input[i].book_name;
    titleList.appendChild(title);
  }
}