// Даны два одинаковых объекта. Сравните их так, чтобы они были равны.
//let student1 = {
//     name: 'Polina',
//     age: 27,
// }
// let student2 = {
//     name: 'Polina',
//     age: 27,
// }

let student1 = {
    name: 'Polina',
    age: 27,
}
let student2 = {
    name: 'Polina',
    age: 27,
}

isEqual = true

for (key in student1) {
    if (Object.keys(student1).length !== Object.keys(student2).length) {
        isEqual = false
    }
    if (!(key in student2 && student1[key] === student2[key])) {
        isEqual = false
    }
}

console.log(isEqual)