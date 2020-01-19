'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indentation

// Expected output:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';

function addToList(item0, item1, item2, item3): string {
  return `${item0}\n${item1}${item2}\n\t${item3}`;
}

console.log(addToList("My todo:", todoText, " - Download games", " - Diablo"));