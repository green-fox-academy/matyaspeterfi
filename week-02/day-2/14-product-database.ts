let foundFish:boolean = false
let fishValue:number = 0;
let products = {
    
    "Eggs": 200,
    "Milk": 200,
    "Fish": 400,
    "Apples": 150,
    "Bread": 50,
    "Chicken": 550,
}
//function below checks the price of any item we input, returns a nope if the item is not on the list
function WhatCost(item:string):string{

    item = item.charAt(0).toUpperCase() + item.slice(1);
    

    for(let f in products){
        if(f === item){
            foundFish = true;
            fishValue = products[f];
        };
    };
    if(foundFish === true){
        console.log("The price of " + item + " is " + fishValue);
    }else(console.log("not on the list, sorry!"));

    return
};

WhatCost("apples");

let expensiveProduct:string = ""

function mostExpensive(item2:{}){
    
    let priceCounter: number = 0;
    for(let g in item2){
        if(item2[g] >= priceCounter){
            priceCounter = item2[g];
            expensiveProduct = g;
        };
    };
    console.log("The most expensive item is the " + expensiveProduct + " and it costs " + priceCounter)
    
};

//fu0- -written by Gizi the cat, she wanted all of the cuddles.

mostExpensive(products);

function average(avInput:{}){
    let priceCounter: number = 0;
    let indexOf:number = 0;
    for (let h in avInput){
        if(avInput[h] > 0){
            priceCounter += avInput[h];
            indexOf += 1;
        }
//    console.log(priceCounter);
//    console.log(indexOf);
    };
    console.log("The average price is " + Math.floor(priceCounter/indexOf) + " lol.")
}

average(products);

function below300(input:{}){
    let prodCounter:number = 0;
    for(let j in input){
        if(input[j] < 300){
            prodCounter += 1
        };
    };
    console.log("There are " + prodCounter + " products with a price under 300.");
};

below300(products);


//WTF is the below not working as intended? The lower if() reads success = true even if above it everywhere it reads as false.

function forAmount (input: number){
    let success:boolean = false;
    let stuff: string = "";
    for(let k in products){
        if(products[k] === input){
            success = true;
            stuff = k
        }else(success = false)
        console.log(success)
    }
    console.log(success)
    if(success = true){
        console.log("You can buy " + stuff + " for " + input);
    }else if (success = false)
        {console.log("You can't buy anything for " + input + "! :(")}
};

forAmount(125)

function cheapest(input:{}){
    let counter: number = 1000;
    let cheapProduct: string = "";
    for(let l in input){
        if(input[l] <= counter){
            counter = input[l];
            cheapProduct = l;
        }console.log(counter);
    }
    console.log("The cheapest product is " + cheapProduct + " with the price of " + counter + " yo.")
    
};

cheapest(products)

