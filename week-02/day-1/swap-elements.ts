// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`


let abc:string[] = ["Arthur", "Boe", "Chloe"]

let [first, second, third] = abc

abc = [first, second, third] = [third, second, first]

console.log(abc)