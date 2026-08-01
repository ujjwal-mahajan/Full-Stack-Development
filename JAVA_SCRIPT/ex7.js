// const person = {
//     firstName: "Ujjwal",
//     lastName: "Mahajan",
//     age: 19,
//     fullName: function() {
//         return this.firstName + ' ' + this.lastName
//     }
// };

// console.log(person.fullName());


// const person = {
//     firstName: "Ujjwal",
//     lastName: "Mahajan",
//     age: 19,
// };

// let print = '';

// for (let x in person) {
//     print += person[x] + ' ';
// }

// console.log(print);
// document.getElementById("txt").innerHTML = print;


// Global Scope
let person = "Ujjwal";
fun1();

function fun1() {
    console.log("Your name is " + person + ".");
}


//Function Scope
fun2();

function fun2() {
    let person2 = "Ujjwal";
    console.log("Your name is " + person2 + ".");
}

console.log(typeof person1)


//Automatically Global

fun3();
console.log("Your name is " + person3 + ".");

function fun3() {
    person3 = "Ujjwal"
} 