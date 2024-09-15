function getBig(Number) {
    let tallest = 0;
    for (let i = 0; i < Number.length; i++) {
        let elements = Number[i];
        if (tallest < elements) {
            tallest = elements;
        }
    }
    return tallest;
}


let Number = [20, 30, 50, 60, 80, 90, 100, 120];
let result = getBig(Number);
console.log(result);








