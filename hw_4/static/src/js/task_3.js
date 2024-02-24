// Написать функцию trimString , которая в качестве аргумента принимает три
// параметра:
//     строку
// значение «от»
// значение «по»
// После вызова функция должна вернуть переданную строку, обрезанную по
// значениям «от» и «по».

const trimString = (str, from , to) => {
    if (isNaN(from) || isNaN(to) || typeof(str) !== "string") {
        return ""
    }
    return str.slice(from, to)
}

str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It"

let result = trimString(str, 2, 50)

console.log(result)