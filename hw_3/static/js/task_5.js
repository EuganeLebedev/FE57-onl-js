console.log("Task 5");

let num = prompt("Num?");
let result = "";

num = Number(num)
if (num % 3 === 0) {
    result += "Fiz";
}
if (num % 5 === 0) {
    result += "Buz";
}

console.log(result)