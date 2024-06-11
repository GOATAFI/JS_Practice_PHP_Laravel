
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

console.log(myArrow(1,2,3,4,5,6,7,8,9));



let arr1 = ['a','b'];
for(i in arr1){
    console.log(i);
    // shudu index return korbe array te for in loop use korle
}

let arr2 = ['c','d'];
for(i of arr2){
    console.log(i);
    // array er item gulai return korbe for of loop use korle
}

let obj1 = {
    oName : 'Maaffii',
    className : 'Third Year'
}

for (i in obj1){
    console.log(i);
    // object er property gula show korbe
 
}

// for (i of obj1){
//     // console.log(i);
//     // for of loop object e kaj e kore na
// }


// ------------- Array Destructuring ----------------
let deshes = ['Ban','Ind','Can','Ity'];
let [a,,,d] = deshes;

console.log(d);

// --------------- Map ----------------------
let myMap = new Map();

myMap.set("key1","Bangladesh");
myMap.set("key2","India");
myMap.set("key3","Bhutan");
myMap.set("key4","Sri-Lanka");

console.log(myMap.keys());
console.log(myMap.values());