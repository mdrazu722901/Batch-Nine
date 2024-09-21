function add(a, b) {
    const sum = a + b;
    return sum;
}
function subtraction(a, b) {
    const subtractions = a - b;
    return subtractions;
}

function Divide(a, b) {
    const Divided = a / b;
    return Divided;
}
function Multiply(a, b) {
    const multiplyed = a * b;
    return multiplyed;
}


function result(a, b, oparations) {
    if (oparations === "add") {
        const total1 = add(a, b);
        return total1;
    }
    if (oparations === "subtraction") {
        const total2 = subtraction(a, b);
        return total2;
    }
    if (oparations === "divide") {
        const total3 = Divide(a, b);
        return total3;
    }
    if (oparations === "multiply") {
        const total4 = Multiply(a, b);
        return total4;
    }
}
const sendValue = result(5, 10, "subtraction");
console.log(sendValue);