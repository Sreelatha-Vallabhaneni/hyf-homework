
//Doubling of numbers

let numbers = [1, 2, 3, 4];
let newNumbers = [];

const doubledOddNumbers = numbers.filter(number => (newNumbers = number % 2 !== 0)).map(number => (newNumbers = number * 2));
console.log(doubledOddNumbers); // [2, 6]
