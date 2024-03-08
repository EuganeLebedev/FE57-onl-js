// Изограммы
// Изограмма - это слово, в котором нет повторяющихся букв, последовательных
// или непоследовательных. Реализуйте функцию, которая определяет, является
// ли строка, содержащая только буквы, изограммой. Предположим, что пустая
// строка является изограммой. Регистр букв мы игнорируем.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(inputString) {
    inputString = inputString.toLowerCase();
    let charUnique = {};

    for (let char of inputString) {
        if (charUnique[char]) {
            return false;
        }
        charUnique[char] = true;
    }

    return true;
}




console.log(isIsogram('Dermatoglyphics'))