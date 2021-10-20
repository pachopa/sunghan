// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?


// function test(n) {
//     // console.log("test")

//     let result = null;


//     for (let i = 2; i < n; i++) {

//         if() {

//         }

//         if((i % 2 !== 0) && (i % 3 !== 0) && (i % 5 !==0)) {

//         }


//     }

//     // if (n < 8) {
//     //     if (n % 2 === 0) {
//     //         result = 2;
//     //     } else if (n % 3 === 0) {
//     //         result = 3;
//     //     } else if (n % 5 === 0) {
//     //         result = 5;
//     //     } else if (n % 7 === 0) {
//     //         result = 7;
//     //     }
//     // } else {
//     //     console.log("this")
//     //     // 8
//     //     for (let i = n; i > 2; i--) {
//     //         console.log(n)

//     //         if((i % 2 !== 0) && (i % 3 !== 0) && (i % 5 !==0)) {
//     //             console.log(i)
//     //         }

//     //         if( n % i === 0) {

//     //         }



//     //         // if (n % 2 === 0) {
//     //         // console.log(n, i)

//     //         //     result = i;
//     //         //     return result;
//     //         // } else if (n % 3 === 0) {
//     //         //     result = i;
//     //         //     return result;
//     //         // } else if (n % 5 === 0) {
//     //         //     result = i;
//     //         //     return result;
//     //         // }





//     //         // if(i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
//     //         //     result = i
//     //         // }

//     //         // if(i > 7) {
//     //         //     if((i % 2 !== 0) && (i % 3 !== 0) && (i % 5 !==0)) {

//     //         //     }
//     //         // } else {
//     //         //     if(i % 2 === 0) {
//     //         //         return 2
//     //         //     } else if (i % 3 === 0) {
//     //         //         return 3
//     //         //     } else if (i % 5 === 0) {
//     //         //         return 
//     //         //     }


//     //         // }

//     //     }
//     // }


//     console.log("result", result);
//     // for (let i = 8; i < 100; i++) {

//     //     // if(i === 2 || i % 2 === 0) {

//     //     // }

//     //     if((i % 2 !== 0) && (i % 3 !== 0) && (i % 5 !==0)  ) {
//     //         console.log(i)
//     //     }



//     // }
// }

// // console.log(test(8));
// let result = [];
// let i = 10;

// function test22() {

//     for (; ;) {

//         // for (let i = 8; i < 100; i++) {

//         //     // if(i === 2 || i % 2 === 0) {

//         //     // }
//         // if(i )


//         if (i % 5 === 0) {
//             i = i / 5;
//             result.push(5);
//         } else if (i % 3 === 0) {
//             i = i / 3;
//             result.push(3);

//         } else if (i % 2 === 0) {
//             i = i / 2;
//             result.push(2);

//         } else {
//             console.log(i)
//             return;
//         }

//         // if( i  5) {

//         // }

//         // if (i === 1) {
//         //     result;
//         // }


//         // if((i % 2 !== 0) && (i % 3 !== 0) && (i % 5 !==0)  ) {
//         //     console.log(i)
//         //     if(13195 % i === 0) {
//         //         console.log(i)
//         //     }
//         // }



//         // }

//     }
// }




// test22()

// console.log(result)
// let arr = []

// function test2(n) {
// for (let i = n - 1; i >= 2; i--) {
//     if(i <= 7) {
//         if(n % i === 0) {
//             console.log(i)
//             arr.push(i)
//         }
//     }
//     if(i > 7 && (i % 2 !== 0) && (i % 3 !== 0) && (i % 5 !==0)  ) {
//         console.log(i)

//         if(n % i === 0) {
//             console.log(i)
//             n = n / i
//             arr.push(i)
//         }
//     }

// }
//     let result;
//     let subResult;
//     for(let i = 2; i < n; i ++) {

//     }
// }

// test2(10)
// console.log(arr)

function test2(n) {
    let result = null;
    for (let i = 2; ; i++) {
        if (n % i === 0) {
            n = n / i;
            result = i;
            if (n === 1) {
                return result;
            }
        }
    }
}

console.log(test2(13195));
// console.log(result)