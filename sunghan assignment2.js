//accessing nested objects 

var Mystorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passensger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

// []
// {"key" : "value"}

// let a = {"Shoes" : "Nike"}
// a["Shoes"];
// a.Shoes

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);

//accessing nester arrays

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },

    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

myPlants[0].list[2];

var secondTree = myPlants[1].list[1];


//Iterate with while loops 

var myArray = [];
var i = 0;
while (i < 5) {
    myArray.push(1);
    i++;
}

console.log(myArray);

//iterate odd numbers with a for loop 

var ourArray = [];

for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}

console.log(ourArray);

//count backwareds with a for loop

var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}

console.log(ourArray);

//Iterate through an array with a for loop 

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;
// 4
for (var i = 0; i < ourArr.length; i++) {
    ourTotal = ourTotal + ourArr[i];
}

console.log(ourTotal);

i = 0;
ourArr[0] = 9;
ourTotal = 0;
ourTotal = ourTotal + ourArr[i];
ourTotal = 9;

i = 1;

ourTotal = ourTotal + ourArr[i];
19         9           10;
i = 2;


i = 3;


//daechul

//Nesting For Loops

function multiplayAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.lengthl; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplayAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(product);

//iterate with do . . . with loops 

var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5);

console.log(i, myArray);

//Generate Random Fractions

function randomFraction() {
    return Math.random();
}

console.log(randomFraction());

//Generate Random Whole numbers 

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
    return Math.random(Math.random() * 10);
}

console.log(randomWholeNum());

//Generate Random Whole Numbers within a Range 

function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

//Use the parseInt Function

function convertToInteger(str) {
    return parseInt(str);
}
convertToInteger("56");


//Use the parseInt Function with a radix

function convertToInteger(str) {

    return parseInt(str, 2);
}

convertToInteger("10011");

//Use the conditiona; (ternary) operator

function checkEqual(a, b) {
    if (a === b) {
        return true;
    }
    else {
        return false;
    }
}

checkEqual(1, 2);

//Use multiple conditional (tenary) operators

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(-10));

// Differences Between the var and let Keywords 

var catName = "Quincy";
var quote;

var catName = "Beau";

function catTalk() {
    "use strict";
    catName = "Oliver";
    quote = catName + " says Meow!";

}

catTalk();

//let and const 
//let can be used in only that block
//u cant reassign a const

//mutate an Array  declared wuth const 

const s = [5, 7, 2];
function editInPlace() {
    "use strict";

    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}

editInPlace();

console.log(s);

// use arrow functions to write concise anonymous functions

const magic = () =>
    new Date();

//Write Arrow Functions with parameters 

var myConcat = (arrl, arr2) => arrl.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

// write higher order arrow functions 
const increment = (function () {
    return function increment(number, value = 1) {
        return number + value;
    };
})();

console.log(increment(5, 2));
console.log(increment(5));

//use the rest operator with function parameters 