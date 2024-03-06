// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// Создайте два массива, в один поместите все положительные числа включая 0,
//     в другой все отрицательные. Оба массива затем выведите в консоль.

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];
let positiveNums = [];
let negativeNums = [];

mixedNumbers.forEach(num => {
    (num >= 0) ? positiveNums.push(num) : negativeNums.push(num);
});

console.log(positiveNums, negativeNums)
