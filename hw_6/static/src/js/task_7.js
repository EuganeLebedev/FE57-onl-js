const binary = [0, 0, 0, 0]

result = "";

for (let i = 0; i < binary.length; i++) {

    result += i+1 !== binary.length ? binary[i] + "1" : binary[i];
}

console.log(result)