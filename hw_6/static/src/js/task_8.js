// Реализуйте функцию, которая будет проверять, является ли слово
// палиндромом.

function isPolindrome(word) {
    return word === word.split("").reverse().join("")
}

console.log(isPolindrome("test"))
console.log(isPolindrome("дед"))