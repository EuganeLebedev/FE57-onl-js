// Тролли атакуют наш раздел с комментариями!!!
//     Единственный способ справиться с этой ситуацией - удалить все гласные из
// комментариев троллей, нейтрализуя угрозу.
// 7. Продвинутая работа с функциями8Ваша задача - написать функцию, которая принимает строку и возвращает
// новую строку с удаленными гласными.
//     Например, строка «This website is for losers LOL!» станет «Ths wbst s fr lsrs LL!»

function removeVowels(message) {
    return message.replace(/[aeiouyAEIOUY]/g, '');
}

const trollComment = "This website is for losers LOL!";
const neutralizedComment = removeVowels(trollComment);
console.log(neutralizedComment);
