// Напишите программу для вычисления общей стоимости покупки телефонов.
//     Вы будете продолжать покупать телефоны (подсказка: циклы!), пока у вас не
// закончатся деньги на банковском счете. Вы также будете покупать аксессуары
// для каждого из телефонов.
//     После того как вы посчитаете сумму покупки, прибавьте налог, затем выведите
// на экран вычисленную сумму покупки, правильно отформатировав её.
//     Наконец, сверьте сумму с балансом вашего банковского счета, чтобы понять,
//     можете вы себе это позволить или нет.
//     Вы должны настроить некоторые константы для «ставки налога», «цены
// телефона», «цены аксессуара», так же как и переменную для вашего «баланса
// банковского счета».
// Вам следует определить функции для вычисления налога и для
// форматирования цены со знаком валюты и округлением до двух знаков после
// запятой.
//     Попробуйте включить ввод данных в вашу программу, например с помощью
// функции prompt(...) . Вы можете, например, запросить у пользователя баланс
// банковского счета. Развлекайтесь и будьте изобретательны!

const getTax = (amount) => {
    return amount * TAX_RATE;
}

const formatPrice = (price) => {
    return price.toFixed(2) + ` ${CURRENCY}`;
}

const TAX_RATE = 0.2;
const PHONE_PRICE = 2000;
const ACCESSORY_PRICE = 50;
const CURRENCY = "BYN"

let bankBalance = Number(prompt(`Ваш стартовый баланс?, ${CURRENCY}`)) || 0;

console.log(`Стартовый баланс ${formatPrice(bankBalance)}`)

while (bankBalance > PHONE_PRICE) {
    bankBalance -= PHONE_PRICE;
    let totalPurchase = PHONE_PRICE;

    if (bankBalance >= ACCESSORY_PRICE) {
        bankBalance -= ACCESSORY_PRICE;
        totalPurchase += ACCESSORY_PRICE;
    }

    totalPurchase += getTax(totalPurchase);

    console.log("Общая стоимость покупки: " + formatPrice(totalPurchase));

    if (totalPurchase > bankBalance) {
        console.log("У вас недостаточно средств на счете для продолжения покупок.");
        break;
    }
}

console.log("Остаток на банковском счете: " + formatPrice(bankBalance));
