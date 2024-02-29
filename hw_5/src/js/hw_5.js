let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    igor: 664,
    alexandra: 199
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

let average = sum / Object.keys(salaries).length;

console.log(`Средняя зарплата сотрудников: ${average}`);
