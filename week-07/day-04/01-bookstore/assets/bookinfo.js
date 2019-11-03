let bookReq = new XMLHttpRequest;
let responseData = '';
let bookTable = document.getElementById('books');

bookReq.open('GET', 'http://localhost:3000/bookinfo', true);

bookReq.onload = () =>{
  responseData = JSON.parse(bookReq.response);
  console.log(responseData);
  renderHTML(responseData);
}

bookReq.send();

let renderHTML = (input) => {
  input.forEach(element => {
    let row = document.createElement('tr');
    for(let element2 of Object.entries(element)){
      let rowItem = document.createElement('td');
        rowItem.innerText = element2[1];
        row.appendChild(rowItem);
      }
      bookTable.appendChild(row);
    });
}