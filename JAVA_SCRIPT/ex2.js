// let time = 0;

// if (time >= 5 & time < 12) {
//     document.getElementById('txt').innerHTML = "Good morning!"
// }

// else if (time >= 12 & time < 17) {
//     document.getElementById('txt').innerHTML = "Good afternoon!"
// }

// else if (time >= 17 & time <= 24) {
//     document.getElementById('txt').innerHTML = "Good evening!"
// }

// else {
//     document.getElementById('txt').innerHTML = "Wrong Time!"
// }


// let age = 0;

// if (age > 0 & age < 12) {
//     document.getElementById('txt').innerHTML = "You are Kid!"
// }

// else if (age >= 12 & age < 16) {
//     document.getElementById('txt').innerHTML = "Yor are Teen!"
// }

// else if (age >= 16 & age < 21) {
//     document.getElementById('txt').innerHTML = "You are Young!"
// }

// else if (age >= 16 & age < 45) {
//     document.getElementById('txt').innerHTML = "You are Adult!"
// }

// else if (age > 45) {
//     document.getElementById('txt').innerHTML = "You are Old!"
// }
 
// else {
//     document.getElementById('txt').innerHTML = "Wrong age!"
// }


// let age = 18;
// let gender = "Male";

// if (age > 0 && age < 18) {
//     document.getElementById('txt').innerHTML = "You cannot vote and cannot marry"
// }

// else if (age > 17) {
//     if (gender = 'Female'){
//         document.getElementById('txt').innerHTML = "You can vote as well as marry"
//     }
    
//     else if (gender = 'Male'){
//         document.getElementById('txt').innerHTML = "You can vote but cannot marry"
//     }

//     else {
//         document.getElementById('txt').innerHTML = "Please insert correct value"
//     }
// }

// else {
//     document.getElementById('txt').innerHTML = "Please insert correct value"
// }


// let age = 17;
// let display = (age < 18) ? "Minor" : "Adult";

// document.getElementById('txt').innerHTML = display;


// let day;
// let date = new Date().getDay();

// switch (date) {
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

// document.getElementById('txt').innerHTML = "Today is" + day;


// let day;
// let date = new Date('2026-05-11').getDay();

// switch (date) {
//     case 4:
//     case 5:
//         day = "Soon it is weekend"
//         break;
//     case 0:
//     case 6:
//         day = "It is weekend"
//         break;
//     default:
//         day = "Waighting for weekend"
// }

// document.getElementById('txt').innerHTML = day;


let x = "Om";
let y = "missing";
let z = x ?? y;

console.log("The name is " + z);