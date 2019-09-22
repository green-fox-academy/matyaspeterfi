let expenses: number[] = [500, 1000, 1250, 175, 800, 120];

function printSum(input:number[]):number{

let sum = input.reduce(function(accumulator, currentvalue){
    return accumulator + currentvalue
});

return sum

}

console.log("The total amount spent is " + printSum(expenses) + ".");


function greatestExpense(input: number[]):number{

    
    return Math.max(...input);

};

console.log("The greatest expense was " + greatestExpense(expenses) + ".");


function cheapestSpend(input: number[]):number{


    return Math.min(...input);
};

console.log("The cheapest spend was " + cheapestSpend(expenses) + ".");

function average(input:number[]):number{


    return Math.floor(printSum(input)/(input.length));
};

console.log("The average of our expenses is " + average(expenses) + ".");