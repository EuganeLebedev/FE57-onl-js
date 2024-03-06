// С помощью метода filter создайте новый массив в котором не будет
// отрицательных чисел.
//     const numbers = [7, -4, 32, -90, 54, 32, -21]
// Реализуйте решение двумя способами, используя function declaration & arrow
// function.
const numbers = [7, -4, 32, -90, 54, 32, -21]
console.log(numbers.filter(element => element >= 0))

console.log(numbers.filter(function (element) {
    return element >= 0
}))

