// function fileUp(bytes) {
//     if (bytes < 1024) return bytes + ' bytes';
//     console.log(bytes + ' bytes')
//     if (bytes < 1024 * 1024) return (bytes / 1024).toLocaleString("en-US", {minimumFractionDigits: 1}) + " KB";
//     console.log(bytes + ' KB')
//     return (bytes / 1024 / 1024).toLocaleString("en-US", {minimumFractionDigits: 1}) + " MB";
// }

// document.getElementById('id').innerHTML = fileUp(1536000);


// const dates = [
//     new Date('2026-01-01'),
//     new Date('2026-12-31')
// ]

// let txt = dates.toLocaleString('en-IN')

// document.getElementById('id').innerHTML = txt;


// const student = {
//     fname: "Ujjwal",
//     lname: "Mahajan",
//     age: 19
// };

// let {fname : name, lname, city = "Nashik"} = student;

// document.getElementById('id').innerHTML = name + " " + lname + " " + city;


// let txt = "Xpediolive";

// let [a1, a2, a3, a4, a5] = txt;

// document.getElementById('id').innerHTML = a1;


// let names = ["Om", "Vikas", "Ujjwal", "Kshitij"];

// let [name1,,,name2] = names;

// document.getElementById('id').innerHTML = name1 + ', ' + name2;


const nums = [10, 20, 30, 40, 50, 60, 70]

let [a, b, ...rest] = nums;

document.getElementById('id').innerHTML = 
"<p>First value is " + a +
"<p>Second value is " + b +
"<p>Rest value are " + rest;