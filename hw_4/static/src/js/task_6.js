// Напишите функцию fooBoo которая принимает в качестве аргумента три
// параметра:
//     булевое значение
// функцию foo которая выводит в консоль свое имя
// функцию boo которая выводит в консоль свое имя
// Если переданное булевое значение true , то запускаем функцию foo, иначе boo

const foo = () => "foo";
const boo = () => "boo";

const fooBoo = (bool, foo, boo) => {
    return bool ? foo() : boo();
}

console.log((fooBoo(false, foo, boo)))