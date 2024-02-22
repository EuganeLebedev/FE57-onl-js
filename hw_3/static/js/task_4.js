let key = true
let documents = true
let pen = true
let apple = false
let orange = true

shouldGoToWork = key && documents && pen && (apple || orange);

console.log(shouldGoToWork)