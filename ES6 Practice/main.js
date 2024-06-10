
// "use strict"; 
// "use strict use na korle error throw korbe na even if name1 declare kora nai"
myName();
function myName() {
  name1 = "Nahid Parvez Mafi";
}

// ------------ Spread Operator ------------
let poorCountry = ['Bangladesh','Sri Lanka'];
let richCountry = ['USA','Canada','Australia'];

let mixCountry = [...poorCountry , ...richCountry]; //array er element gula spread operator diye ber kore ana jay
console.log(mixCountry);


// ---------- Rest Parameter ----------
function calculation(...numbers){
    let sum = 0;
    for (let i of numbers){
        sum += i;
    }
    console.log(sum);
}

calculation(1,2,3,4,5);

// ----------- Variable Hoisting ----------
// age assign , pore declaration 
name2 = "Nahid Parvez Mafi 2";
console.log(name2);
var name2; //eta abar let diye korle hoy na , var e lage

//---------- for of loop -----------
// array te loop chalanor jonno for of loop best
let country = ['Dhaka','Barishal','Rajshahi'];
for (jhela of country){
    console.log(jhela);
}

// -------- Arrow Function -------------

let myArrow = (...X) => {
    // console.log(X);
    return X
}

console.log(myArrow(1,2,3,4,5));