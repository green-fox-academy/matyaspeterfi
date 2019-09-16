// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList: number[] = [1,2,3,8,5,6,8,8,8,8,8];

numList = numList.map(function(element){
    console.log(element);
    if(element === 8){
        return 4;

    }
    return element;

})

console.log(numList)






