// Нет истории, нет теории
// В приведенных ниже примерах показано, как написать функцию:
//     accum('abcd') // -> 'A-Bb-Ccc-Dddd'
// accum('RqaEzty') // -> 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
// accum('cwAt') // -> 'C-Ww-Aaa-Tttt'
// Параметр — это строка, которая включает только буквы от a...z и A...Z

function accum(str) {
    return str.split('').map((char, index) => {
        return char.toUpperCase() + char.toLowerCase().repeat(index);
    }).join('-');
}

console.log(accum('abcd'))
console.log(accum('RqaEzty'))
console.log(accum('cwAt'))
