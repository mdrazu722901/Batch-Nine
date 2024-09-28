function CalculateMoney(ticketQuantity) {
    if (ticketQuantity >= 0) {
        const guardSalery = 500;
        const Stafe = 50 * 8;
        let stafeCost = guardSalery + Stafe;
        let ticketPrice = ticketQuantity * 120;
        let ReturnAmount = ticketPrice - stafeCost;
        return ReturnAmount;
    }
    else {
        return massage = "Invalide Input Here";
    }
}

let result = CalculateMoney(-1);
// console.log(result);

function checkName(Name) {
    const letterBox = ["a", "y", "i", "e", "o", "u", "w"];
    for (const element of letterBox) {
        if (typeof (Name) === "string") {
            let input = Name.toLowerCase();
            if (input[input.length - 1] === element) {
                return "Good Name";
            }
            else {
                return "Bad Name";
            }
        }
        else {
            return "Invalid Input"
        }
    }
}

let output = checkName(["jankara"]);
// console.log(output);



function deleteInvalide(numberArray) {

    if (Array.isArray(numberArray) === true) {
        let newArray = [];
        for (const element of numberArray) {
            if (typeof (element) === "number") {
                newArray.push(element);
            }
        }
        return newArray;
    }
    else {
        return "Invalid input Array"
    }


}

let togetResult = deleteInvalide(["1, 2, 3, 4,j "]);
// console.log(togetResult);















function password(info) {
    if (info.name != undefined && info.birthYear != undefined && info.siteName != undefined && String(info.birthYear).length === 4) {
        let userName = '';
        let siteName = '';
        let birthYear = '';

        userName = info.name;
        siteName = info.siteName[0].toUpperCase() + info.siteName.substring(1);
        birthYear = info.birthYear;

        return siteName + "#" + userName + "@" + birthYear;

    }
    else {
        return "Invalid"
    }
}
let makePassword = password({ name: "Razu", birthYear: 2010, siteName: "gmail.com" });
// console.log(makePassword);





function monthlySavings(arr, livingCost) {
    let TotalEarning = 0;
    if (Array.isArray(arr) === true) {
        for (let i = 0; i < arr.length; i++) {
            let element = arr[i];
            if (element >= 3000) {
                // console.log(element*20/100);
                let afterDiscort = element - element * 20 / 100;
                TotalEarning = TotalEarning + afterDiscort;
            }
            else {
                TotalEarning = TotalEarning + element;
            }
        }
    }
    else {
        return "Invalid Input"
    }

    let TotalSavings = TotalEarning - livingCost;
    // return TotalSavings
    if(TotalEarning > 0){
        console.log("ok")
    }
    
}


let TillEarning = [1000,2000,2500];
let livingCost = 5000;
const TotalResult = monthlySavings(TillEarning, livingCost);
console.log(TotalResult);
