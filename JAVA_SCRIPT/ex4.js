// function calc(num1, num2, sign) {
//     if (sign == '+') {
//         console.log(num1 + num2);
//     }
//     else if (sign == '-') {
//         console.log(num1 - num2);
//     }
// }

// calc(3, 6, '+');



// function findSum() {
//     let sum = 0;
//     for(let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }

//     console.log(sum);
// }

// findSum(1, 482, 698, 23, 89, 12);



// function cName(fname, lname) {
//     console.log(fname + ' ' + lname);
// }

// let st1 = cName("Ujjwal", "Mahajan");
// let st2 = cName("Vikas", "Khoje");
// let st3 = cName("Kajol", "Rajput");
// let st4 = cName("Kshitij", "Bare");



// let num1 = 3
// // let num2 = 6

// function calc(x, y = 6) {
//     let ans = x - y;
//     if (ans < 0) {
//         ans = - ans
//     }
//     console.log(ans);
// }

// calc(num1);



function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    console.log(sum);
}

sum(10, 34, 26, 45, 95);