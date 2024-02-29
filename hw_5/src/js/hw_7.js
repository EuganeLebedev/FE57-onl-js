// Мы на футбольном матче, счет забитых голов одной команды не может
// превышать 9 мячей. Жаль что нам присылают результат матча в формате
// «2:5», ведь нам надо это вывести в консоль словами. Давайте напишем
// программу, которая будет за нас переводить формат и выводить результат в
// консоль


function convertScoreToWords(score) {
    const scores = score.split(':');
    const teamAScore = parseInt(scores[0]);
    const teamBScore = parseInt(scores[1]);

    const scoreWords = ["ноль", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];

    if (teamAScore > 9 || teamBScore > 9) {
        console.log("Ошибка: количество голов не может превышать 9 мячей!");
    } else {
        const teamAWords = scoreWords[teamAScore];
        const teamBWords = scoreWords[teamBScore];

        console.log(`Результат матча: Команда A - ${teamAWords}, Команда B - ${teamBWords}`);
    }
}

convertScoreToWords('2:5');