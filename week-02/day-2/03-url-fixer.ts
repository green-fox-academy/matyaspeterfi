'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
let urlAlt: string = 'https//www.reddit.com/r/nevertellmethebots';

function replaceTwoOriginal(input) {

  let array: string[] = input.split("");
  array.splice(5, 0, ":")
  let url2: string = array.join("")
  let url3: string = url2.replace("bots", "odds")


  return url3;
};

console.log(replaceTwoOriginal(url));

function replaceTwo(url, word1, word2) {
  return url.replace("https", word1).replace("bots", word2);
};

console.log(replaceTwo(urlAlt, "https:", "odds"));