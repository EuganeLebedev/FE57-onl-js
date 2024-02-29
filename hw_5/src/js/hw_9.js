// У нас есть объект с животными. Наша задача узнать имя птицы и вывести его в
// консоль. Но произошла ошибка и в этом объекте нет птицы. Если попробуем
// узнать имя мы получим ошибку. Задача придумать, как обратиться к
// несуществующему объекту и не получить ошибку, чтобы наша программа
// работала дальше

const animals = {
    cat: {
        name: 'Енчик',
        age: 3,
    },
    dog: {
        name: 'Орео',
        age: 2,
    }
}

console.log(animals?.bird?.name || 'Птицы нет в объекте animals')



