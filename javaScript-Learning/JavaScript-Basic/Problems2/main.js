let phone = [
    { Name: "Sumsong", Price: 40000, Camera: "12mp" },
    { Name: "Xoami", Price: 30000, Camera: "12mp" },
    { Name: "Walton", Price: 20000, Camera: "12mp" },
    { Name: "Nokaya", Price: 5000, Camera: "12mp" },
    { Name: "Radmi", Price: 35000, Camera: "12mp" },
]

function getMinPrice(phone) {
    let Min = phone[0];
    for (let i = 0; i < phone.length; i++) {
         let elements = phone[i];
         if(elements.Price > Min.Price){
            Min = elements;
         }
    }
    return Min;
};

let result = getMinPrice(phone);
console.log(result);