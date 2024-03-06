// Создать массив длинной не менее 5, из динамически созданных случайных
// чисел. Далее написать алгоритм, который берет все числа из исходного
// массива, возводит их в куб и записывает в новый массив. В конце вывести оба
// массива в консоль

let originalArray = [];
let cubicArray = [];

for (let i = 0; i < 5; i++) {
    const randNum = Math.floor(Math.random() * 10)
    originalArray.push(randNum);
}

originalArray.forEach(num => {
    cubicArray.push(num ** 3);
});

console.log(originalArray);
console.log(cubicArray);
