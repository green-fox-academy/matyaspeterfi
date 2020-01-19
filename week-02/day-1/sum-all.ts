// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

let ai: number[] = [3, 4, 5, 6, 7, 8, 9, 10];

let sum: number = ai.reduce((acc: number, curr: number) => {
  return acc + curr;
})

console.log(sum);