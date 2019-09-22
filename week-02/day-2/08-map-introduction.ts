'use strict'

let newmap = {

}

function isEmpty(obj) {

    return Object.keys(obj).length === 0;
}
if(isEmpty(newmap) === true){
    console.log("The object is empty");
};

newmap["97"] = "a";
newmap["98"] = "b";
newmap["99"] = "c";
newmap["65"] = "A";
newmap["66"] = "B";
newmap["67"] = "C";

//print just the keys - use Object.keys() method
console.log(Object.keys(newmap));

//for some reason object.values throws an error, but why?
console.log(Object.values(newmap));

newmap["68"] = "D";

console.log(newmap[68])

console.log(newmap[97])

let keyCount = Object.keys(newmap);
console.log(keyCount.length);

console.log(newmap[99]);

delete newmap[97];
console.log(newmap);

if (newmap[100] === undefined){
    console.log("there is no 100");
}else{
    console.log(newmap[100]);
}

for(let i = 0; i < 100; i++){
    delete newmap[i];
};

console.log(newmap);