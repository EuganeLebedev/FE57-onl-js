// Используя метод find найдите в массиве первое четное число.
//     const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
// Реализуйте решение двумя способами, используя function declaration & arrow
// function

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
let result = numbers.find(element => !(element % 2));

console.log(result)

function isEven(element) {
    return !(element % 2)
}

let result2 = numbers.find(isEven);

console.log(result2)