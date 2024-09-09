/*
1.split
2.indexOF


// 1 and 2 problems done===================================================================
*/
var name  = "md Razu aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaAaaaaaaaaaaa";
var differents = name.split("");
// console.log(differents);
var i = 0;
for (const element of differents) {
     console.log(element);
     if(element.toUpperCase() === "A"){
        i++;
     }
    
}
console.log(i);



// 3rd  => Check whether a string contains all the vowels===========================================

let vowels = ["A", "E", "I", "O", "U"];

// console.log(vowels.includes("A"));
let name = "Razu";
let likeArray = name.split("");

for (const element of likeArray) {
     let items = element.toUpperCase();
    if(vowels.includes(items) === true){
        console.log(element)
    }
}


//4th problems solves======================================================================
let Letter = "Y";
if(Letter.toUpperCase() === "X"){
    let replacements = Letter.replace(Letter, "Y");
    console.log(replacements);
}
if(Letter.toUpperCase() === "Y"){
    let replacements = Letter.replace(Letter, "X");
    console.log(replacements);
}


// 5th Problems solves===========================================================================

let name = "razu rakib sakib rasel manik rubel rahad rafi mojid maimuna";
let linkArrayConvert = name.split(" ");
// console.log(linkArrayConvert);
for (const element of linkArrayConvert) {
    let to = element[0].toUpperCase() + element.substr(1)
    console.log(to);
}

