// Пользователь решил повеселиться и ввел свое имя в таком в виде ‘пОлИнА нАбЕрЕжНаЯ’
// Исправьте эту ситуацию чтобы мы смогли корректно поприветствовать пользователя, и
// поприветствуйте его через alert :
// Привет, Полина Набережная!

let name = "пОлИнА нАбЕрЕжНаЯ"
name_list = name.split(" ")
result = ""
for (let element of name_list) {
    result += " " + element[0].toUpperCase() + element.slice(1).toLowerCase()
}

console.log("Привет," + result + "!")