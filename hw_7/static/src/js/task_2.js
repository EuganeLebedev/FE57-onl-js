// Используя метод map создайте новый массив, на основе массива users , в
// котором каждый элемент массива будет содержать строку вида:
//     ['member 1: Darya', 'member 2: Masha', ... etc] .
//         const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
// Реализуйте решение двумя способами, используя function declaration & arrow
// function.

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

let newArray = []

users.map((element, index) => newArray.push(`member ${index + 1}: ${element}`))

console.log(newArray)

users.map(function (element, index) {
    newArray.push(`member ${index + 1}: ${element}`)
})

console.log(newArray)