// Написать функцию getSum , которая принимает два целых числа a и b, они могут
// быть положительными или отрицательными, найти сумму всех чисел между
// ними, включая их, и вернуть ее. Если два числа равны, верните a или b.
// getSum(1, 0) == 1 // 1 + 0 = 1
// getSum(1, 2) == 3 // 1 + 2 = 3
// getSum(0, 1) == 1 // 0 + 1 = 1
// getSum(1, 1) == 1 // 1 Since both are same
// getSum(-1, 0) == -1 // -1 + 0 = -1
// getSum(-1, 2) == 2 // -1 + 0 + 1 + 2 = 2

const _getSum = (a, b) => {
    sum = 0
    for (let i = a; i <= b; i++) {
        sum += i
    }
    return sum
}

const getSum = (a, b) => {
    let result = 0
    switch (true) {
        case (a > b):
            result = _getSum(b, a)
            break
        case (a < b):
            result = _getSum(a, b)
            break
        default:
            result = a || b
    }
    return result
}

let res = getSum(-1, 0)
console.log(res)