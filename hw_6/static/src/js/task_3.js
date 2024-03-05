const numbers1 = [5, 43, 63, 23, 90];
numbers1.length = 0;
console.log(numbers1);

const numbers = [5, 43, 63, 23, 90];
numbers.splice(0, numbers.length);

console.log(numbers);