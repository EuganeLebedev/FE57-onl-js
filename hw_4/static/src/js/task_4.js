// Написать функцию getSumNumbers . Она будет принимать число и вычислять
// сумму цифр, из которых состоит число. Для 2021 это будет 5.

function getSumNumbers(num) {
    let result = 0;
    numString = num.toString()
    for (let i = 0; i < numString.length; i++) {
        positionNum = Number(numString[i])
        if (!isNaN(positionNum))
        result += positionNum
    }
    return result
}

let res = getSumNumbers(2021)

console.log(res)