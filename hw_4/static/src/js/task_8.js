// Ваша задача - разбить плитку шоколада заданного размера n x m на
// маленькие квадраты. Каждый квадрат имеет размер 1x1 и не может быть
// разбит. Реализуйте функцию, которая будет возвращать минимальное
// количество необходимых надломов.
//     Например, если вам дается плитка шоколада размером 2 x 1, вы можете
// разделить ее на отдельные квадраты всего за один надлом, но для размера 3 x
// 1 вы должны сделать два надлома.
//     Если входные данные недействительны, вы должны вернуть 0 (поскольку
// надломы не требуются, если у нас нет шоколада для разделения). Ввод всегда
// будет неотрицательным целым числом

function countBreaks(n, m) {
    if (n < 1 || m < 1) {
    }
    return n * m - 1;
}

console.log(countBreaks(3,1))


