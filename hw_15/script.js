// Создайте класс Developer
// Конструктор этого класса принимает один параметр name
// Реализуйте метод startWork , который возвращает строку:
//     name start work ...
// Реализуйте метод endtWork который возвращает строку:
//     name end work ...
// Далее реализуйте два класса Frontend Backend , которые будут наследовать
// методы из класса Developer
// Класс Frontend должен иметь свой уникальный метод buildWebSite который
// возвращает строку:
//     name start build website
// Класс Frontend должен иметь свой уникальный ключ websiteName , в который
// мы записываем название веб-сайта, с ним и будет работать разработчик.
//     Класс Backend должен иметь свой уникальный метод buildServer , который
// возвращает строку:
//     name start build server
// Проинициализируйте два класса Frontend Backend и вызовите у них все
// доступные методы

class Developer {
    constructor(name) {
        this.name = name;
    }

    startWork() {
        return `${this.name} start work ...`;
    }

    endWork() {
        return `${this.name} end work ...`;
    }
}

class Frontend extends Developer {
    constructor(name, websiteName) {
        super(name);
        this.websiteName = websiteName;
    }

    buildWebSite() {
        return `${this.name} start build website`;
    }
}

class Backend extends Developer {
    buildServer() {
        return `${this.name} start build server`;
    }
}


const frontendDeveloper = new Frontend('Employee 1', 'My site');
console.log(frontendDeveloper.startWork());
console.log(frontendDeveloper.endWork());
console.log(frontendDeveloper.buildWebSite());

const backendDeveloper = new Backend('Employee 2');
console.log(backendDeveloper.startWork());
console.log(backendDeveloper.endWork());
console.log(backendDeveloper.buildServer());