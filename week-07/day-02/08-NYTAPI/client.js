'use strict'
let articleContainer = document.getElementById('articles');
let response;
let responseArticles = [];

let apiKey = '28lKP62Cc9TykGEKVICFPHAQzTD7EZhL';
let apiRequest = new XMLHttpRequest();
let searchTerm = 'apollo11'

apiRequest.onreadystatechange = console.log(apiRequest.readyState);

apiRequest.open ('GET', `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${apiKey}`, true);

apiRequest.onload = () => {
  response = JSON.parse(apiRequest.response);
  responseArticles = response.response.docs;
  console.log(responseArticles)
  renderHtml(responseArticles);
}

apiRequest.send();

let renderHtml = (data) => {
  for(let i = 0; i < responseArticles.length; i++){
    
  let articleSection = document.createElement('ul');
  let articleHeadline = document.createElement('li');
  let articleSnippet = document.createElement('li');
  let articlePubDate = document.createElement('li');
  let permaLink = document.createElement('li');


  articleHeadline.innerText = (data[i].headline.main);
  articleSnippet.innerText = (data[i].snippet);
  articlePubDate.innerText = (data[i].pub_date);
  permaLink.innerHTML = (`<a href=${data[i].web_url}>Permalink</a>`);

  articleSection.appendChild(articleHeadline);
  articleSection.appendChild(articleSnippet);
  articleSection.appendChild(articlePubDate);
  articleSection.appendChild(permaLink);

  articleContainer.appendChild(articleSection);
  }



}