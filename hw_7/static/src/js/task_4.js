// Используя метод reduce получите сумму всех чисел массива.
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// Реализуйте решение двумя способами, используя function declaration & arrow
// function.

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

let result = fibonacci.reduce(((total, element) => total += element), total=0)

console.log(result)

let result2 = fibonacci.reduce((function (total, element) {
    return total + element
}), total=0)

console.log(result2)
