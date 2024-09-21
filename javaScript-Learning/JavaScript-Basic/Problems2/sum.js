const Products = [
    {name: "shampo", price: 300, quantity: 2},
    {name: "Chiruni", price: 100, quantity: 3},
    {name: "shirt", price: 700, quantity: 2},
    {name: "Pant", price: 800, quantity: 5},
    {name: "ganji", price: 200, quantity: 4},
];

function getSum(Products){
    let total = 0;
   for(let i = 0; i< Products.length; i++){
         let elements = Products[i];
         let elementsPrice = elements.price * elements.quantity;
         total = total + elementsPrice;
   }
   return total;
}

let result = getSum(Products)
console.log(result);