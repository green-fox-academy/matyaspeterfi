'use strict'

let names :string[] = ["William"];

console.log(names.length);

if(names.length === 0){
    console.log(names.length);
}else{
    console.log("The list is not empty");
}

names.push("John");
names.push("Amanda");

console.log("The number of names in the array is " + names.length);

console.log("The third name is " + names[2]);

names.forEach(function(element){
    console.log(element);
})

for(let i:number = 0; i < names.length; i++){
    console.log(i + ". " + names[i]);
};

names.splice(1, 1);

console.log(names);

let namesReversed:string[] = names.reverse();

console.log(namesReversed)

for(let i = 0; i < names.length; i++){

    console.log(namesReversed[i]);
};

names.splice(0, names.length);

console.log(names);