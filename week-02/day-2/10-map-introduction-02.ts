let map = {
    "978-1-60309-452-8" : "A Letter to Jo",
    "978-1-60309-459-7" : "Lupus",
    "978-1-60309-444-3" : "Red Panda and Moon Bear",
    "978-1-60309-461-0" : "The Lab",
};

console.log(Object.entries(map))

//for of loop MDN

for(let [value, key] of Object.entries(map)){
    console.log(key, "(", value, ")");
};

delete map["978-1-60309-444-3"];

console.log(map);

function deleteByValue(val){
    for(let f in map){
        if(map[f] === val){
            delete map[f];
        }
    }
}

deleteByValue("The Lab");

console.log(map);

map["978-1-60309-450-4"] = "They Called Us Enemy";
map["978-1-60309-453-5"] = "Why Did We Trust Him";

console.log(map);

function printIf(input){
    for(let g in map){
        if(map[g] === input){
            console.log("The value associated with " + input + "is" + g)
        }else(console.log("There is no value associated with " + input ))
    }
}

printIf("478-0-61159-424-8")

console.log(map["978-1-60309-453-5"]);