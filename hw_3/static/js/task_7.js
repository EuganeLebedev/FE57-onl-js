direction = prompt("Direction?")

while (direction) {
    switch (direction) {
        case "юг":
            console.log("на юг пойдешь счастье найдешь");
            direction = false
            break;
        case "север":
            console.log("на север пойдешь много денег найдешь");
            direction = false
            break;
        case "запад":
            console.log("на запад пойдешь верного друга найдешь");
            direction = false
            break;
        case "восток":
            console.log("восток пойдешь разработчиком станешь");
            direction = false
            break;
        default:
            direction = prompt("Try again! Direction?");
    }
}