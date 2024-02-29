let obj = {
    "a": 1,
    "b": 23
}

function checkKey (obj, key) {
    if (key in obj) {
        console.log("True")
    }
}

checkKey(obj, "a")