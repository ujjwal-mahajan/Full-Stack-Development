// for (let i = 2; i < 101; i+= 1) {
//     let Prime = true;
    
//     for (let j = 2; j < i; j+= 1) {
//         if (i % j == 0) {
//             Prime = false;
//         }
//     }
    
//     if (Prime) {
//         console.log(i);
//     }
// }


// let num = 3;
// let i = 0;

// for (i = 0; i < 5; i++) {
//     console.log("The number is " + i);
// }

// while (i < 5) {
//     console.log("The number is " + i);
//     i++;
// }


// let day;

// switch (new Date(). getDay()) { 
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;
// }


// let num = "";

// for (let i = 1; i < 10; i++) {
//     if (i === 3) {continue;} //can skip the current location
//     num +=i * 10 + ", ";
// }

// console.log(num)


let num = "";

loop1: for (let i = 1; i < 10; i++) 
    loop2: for (let t = 1; t < 5; t++) {
    if (t === 3) {continue loop1;} //can skip the current location
    num += t + ", ";
}

console.log(num)