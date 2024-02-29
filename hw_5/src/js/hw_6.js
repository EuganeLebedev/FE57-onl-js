let userDatabase = {};

function registration() {
    let login = prompt("Введите логин:");
    let password = prompt("Введите пароль:");

    userDatabase[login] = password;
    console.log("Регистрация прошла успешно!");
}

function validateUser() {
    let login = prompt("Введите логин для подтверждения:");
    let password = prompt("Введите пароль для подтверждения:");

    if (userDatabase[login] === password) {
        console.log("Добро пожаловать!");
    } else {
        console.log("Логин или пароль введены неверно.");
    }
}

registration();
validateUser();