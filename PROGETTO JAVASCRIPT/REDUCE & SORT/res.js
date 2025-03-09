let expenses = [
    600,
    200,
    100,
    50
];


// 0 + 1 + 2 + 3 + 4
let number = 0;
let sum = expenses.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  number,
);

console.log(sum);

let words=["banana","apple","cherry","date"];

words.sort();
console.log(words);



expenses.sort();
console.log(expenses);






