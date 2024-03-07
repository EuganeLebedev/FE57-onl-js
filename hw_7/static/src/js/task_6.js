function Student(name, rate, salary) {
    this.name = name;
    this.rate = rate;
    this.salary = salary;

    this.calculateCredit = function() {
        let creditMultiplier = 0;
        switch (this.rate) {
            case 'A':
                creditMultiplier = 12;
                break;
            case 'B':
                creditMultiplier = 9;
                break;
            case 'C':
                creditMultiplier = 6;
                break;
            default:
                creditMultiplier = 0;
        }
        return this.salary * creditMultiplier;
    };
}

const students = [
    new Student('Анна', 'A', 2000),
    new Student('Марк', 'B', 1500),
    new Student('Лиза', 'C', 1800),
    new Student('Денис', 'D', 1200),
    new Student('Егор', 'A', 2500)
];

function calculateTotalCredit(studentsArray) {
    let totalCredit = 0;
    for (let student of studentsArray) {
        totalCredit += student.calculateCredit();
    }
    return totalCredit;
}

const totalCredits = calculateTotalCredit(students);
console.log(totalCredits);
