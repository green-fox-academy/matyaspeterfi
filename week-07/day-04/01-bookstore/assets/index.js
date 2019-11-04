let indexReq = new XMLHttpRequest;

let response = '';

indexReq.open('GET', 'http://localhost:3000/', true);

indexReq.onload = () => {
  console.log(indexReq.response);
  let message = document.getElementById('message');
  message.innerText = indexReq.response;
}

indexReq.send();

//--Book Title code--//

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

//---Book Table code---//

let bookReq = new XMLHttpRequest;
let bookResponseData = '';
let bookTable = document.getElementById('books');

bookReq.open('GET', 'http://localhost:3000/bookinfo', true);

bookReq.onload = () => {
  bookResponseData = JSON.parse(bookReq.response);
  console.log(bookResponseData);
  renderAnotherHTML(bookResponseData);
}

bookReq.send();

let renderAnotherHTML = (input) => {
  input.forEach(element => {
    let row = document.createElement('tr');
    for (let element2 of Object.entries(element)) {
      let rowItem = document.createElement('td');
      rowItem.innerText = element2[1];
      row.appendChild(rowItem);
    }
    bookTable.appendChild(row);
  });
}