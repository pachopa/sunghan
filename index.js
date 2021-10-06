// var asd = "*";

// for (let i = 0; i < 5; i++) {
//     // var qwe
//     i = i + 1;
//     //console.log(asd = asd + asd)
//     console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//     // var qwe
//     // i = i + 1;
//     //console.log(asd = asd + asd)
//     console.log("a" + i);
// }

// let a = 5 + "daechul";
// let b = 5 + 5;

// console.log(typeof a, a)

// for (let firstI = 0; firstI < 5; firstI++) {
//     for (let secondI = 0; secondI < 5; secondI++) {
//         if (secondI >= firstI) {
//             a = a + "*";
//         } else {
//             a = a + " ";
//         }
//     }
// }

// let a = "****";
// for (let firstI = 0; firstI < 5; firstI++) {
//     // console.log(a);
//     for (let secondI = 0; secondI < 5; secondI++) {
//         a = a + "*";
//         console.log(a);
//     }
// }

// row column

// *
// **
// ***
// ****;

// function () {

// }

// function daechulCode() {
//     for (let firstI = 3; firstI > 0; firstI--) {
//         let a = "";

//         for (let secondI = 1; secondI <= 3; secondI++) {
//             //secondI = 1,2,3
//             // 3 = 3;
//             if (secondI >= firstI) {
//                 a = a + "*";
//             } else {
//                 a = a + " ";
//             }

//         }
//         console.log(a);
//     }
// }

// daechulCode();

// function createHalfPyramid(height) {

//     for (var i = 1; i <= height; i++) {
//         var row = '';

//         for (var j = 1; j <= (height - i); j++) {
//             row += ' ';
//         }

//         for (var k = 1; k <= i; k++) {
//             row += '*';
//         }

//         console.log(row);
//     }
// }

// createHalfPyramid(6);

// row = '    *';
// row = '   **';;

// createHalfPyramid(5);




// let a = [1, 2, 3, 4];

// if (a[0] > 1) {
//     reutrn a[0];
// } else if (a[1]) {
//     return a[1];
// } else {
//     return a[3];
// }



// for () {
//     const element = array[i];

// }


// 1,2,3,4,5,6,7,8,9

// 3의 배수 or 5의 배수 

// console.log(6 % 3)
// console.log(number % 5)

let a = "children's";

function removeUnNecessaryChar2(params) {
    // params = params.replaceAll(" (Inches)", "");
    return params.replace(/'"/g, "");
}

console.log(removeUnNecessaryChar2(a));