function multiply(num1, num2, num3, num4) {
    const total = num1 * num2 * num3 * num4;
    console.log(total);
}
multiply(10, 20, 10, 4);


function oddEvent(num) {
    if (num % 2 === 0) {
        let multiply2 = num * 2;
        return multiply2;
    }
    else {
        let divide = num / 2;
        return divide;
    }
}
let result = oddEvent(6);
console.log(result);


function make_avg(array) {
    let total = 0;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        total = total + number;
        count++;
    }
    total = total / count;
    let avg = total;
    return avg;
}
let outputResult = make_avg([10, 20, 30])
console.log(outputResult)


function countZero(bainary) {
    let count0 = 0;
      for (const element of bainary) {
        if(element === 0){
            count0++;
        }
      }
      return count0;
}
let bainary = [0, 1, 0, 1, 0, 0, 1, 0, 0, 1];
let Zero = countZero(bainary);
console.log(Zero);




function odd_even(check){
    if(check % 2 === 0){
        return "This is Even Number"
    }
    else{
        return "this is Odd Number"
    }
}
let check = odd_even(10);
console.log(check);