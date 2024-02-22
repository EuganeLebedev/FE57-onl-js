let key = true
let documents = true
let pen = true
let apple = false
let orange = true

if (key && documents && pen && (apple || orange)) {
    shouldGoToWork = true
} else {
    shouldGoToWork = false
}

console.log(shouldGoToWork)