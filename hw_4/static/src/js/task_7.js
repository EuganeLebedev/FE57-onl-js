// Реализуйте функцию, который принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать true , если треугольник можно построить со
// сторонами заданной длины, и false в любом другом случае.

function isTrianglePossible(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

console.log(isTrianglePossible(10, 10, 10))
