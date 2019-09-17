'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';
let item0: string = ""
let item1: string = "";
let item2: string = "";
let item3: string = "";
let toDoText2:string = "";

function addToList(item0, item1, item2, item3):string{

    toDoText2 = item1 + item0 + item2 + item3;


    return toDoText2
}

console.log(addToList(todoText, "My todo:\n", " - Download games\n", "\t - Diablo"));