let indexReq = new XMLHttpRequest;

let response = '';

indexReq.open('GET', 'http://localhost:3000/', true);

indexReq.onload = () => {
  console.log(indexReq.response);
  let message = document.getElementById('message');
  message.innerText = indexReq.response;
}

indexReq.send();