// Самый высокий и самый низкий
// В этом небольшом задании вам дается строка чисел, разделенных пробелами,
//     и вы должны возвращать наибольшее и наименьшее число.
// highAndLow('1 2 3 4 5') // return '5 1'
// highAndLow('1 2 -3 4 5') // return '5 -3'
// highAndLow('1 9 3 4 -5') // return '9 -5'
// Строка вывода должна состоять из двух чисел, разделенных одним пробелом,
//     при этом наибольшее число должно быть первым

function highAndLow (numString) {
    let numArray = numString.split(" ").map(element => Number(element));
    let high = numArray[0]
    let low = numArray[0]
    numArray.forEach(element => {
        high = high < element ? element : high;
        low = low > element ? element : low;
    })
    return `${high} ${low}`
}

console.log(highAndLow('1 2 3 4 5'))
console.log(highAndLow('1 2 -3 4 5'))
console.log(highAndLow('1 9 3 4 -5'))