// Задачи:
// С ниже приведенным объектом решить следующие задачи:
// 1. Создать строку из названий предметов написанных через запятую
// 2. Подсчитать общее количество студентов и учителей на всех предметах
// 3. Получить среднее количество студентов на всех предметах
// 4. Создать массив из объектов предметов
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на
// факультете от большего к меньшему
// ```javascript
// const subjects = {
// mathematics: {
// students: 200,
// teachers: 6
// },
// biology: {
// students: 120,
// teachers: 6
// },
// geography: {
// students: 60,
// teachers: 2
// },
// chemistry: {
// students: 100,
// teachers: 3
// }
// }
// ```


const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
};


const subjectNames = Object.keys(subjects).join(', ');

let totalStudents = 0;
let totalTeachers = 0;
for (let subject in subjects) {
    totalStudents += subjects[subject].students;
    totalTeachers += subjects[subject].teachers;
}

const totalSubjects = Object.keys(subjects).length;
const averageStudents = totalStudents / totalSubjects;

const subjectsArray = [];
for (let subject in subjects) {
    subjectsArray.push({
        subject: subject,
        students: subjects[subject].students,
        teachers: subjects[subject].teachers
    });
}

subjectsArray.sort((a, b) => b.teachers - a.teachers);

console.log('Список предметов: ', subjectNames);
console.log('Общее количество студентов: ', totalStudents);
console.log('Общее количество учителей: ', totalTeachers);
console.log('Среднее количество студентов на предметах: ', averageStudents);
console.log('Массив из объектов предметов: ', subjectsArray);
console.log('Массив, отсортированный по количеству преподавателей: ', subjectsArray);