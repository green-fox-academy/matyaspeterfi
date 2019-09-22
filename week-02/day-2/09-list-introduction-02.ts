let ListA: string[] = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];

let ListB = Array.from(ListA);

console.log(ListB);

ListA.forEach(function(element){
    if(element === "Durian"){
        return console.log ("The list contains Durian");
    };
});

ListB.splice(3, 1);

console.log("List B " + ListB);

ListA.splice(4, 0, "Kiwifruit");

console.log("List A " + ListA);

if(ListA.length > ListB.length){
    console.log("List A is longer")
}else(console.log("List B is Longer"));

console.log(ListA.indexOf("Avocado"));

console.log(ListB.indexOf("Durian"));

ListB.push("Passion Fruit", "Pomelo");

console.log(ListB);

console.log(ListA[3]);