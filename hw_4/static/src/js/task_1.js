const getSum = (num) => {
    if (typeof(num) !== "number" || isNaN(num) ) {
        return 0
    }
    return num <= 0 ? 0 : num + getSum(num-1)
}

let res = getSum(100)

console.log(res)