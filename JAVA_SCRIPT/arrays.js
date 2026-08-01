// let var1 = ['Bhavesh', 'Kshitij', 'Kajol', 'Ujjwal', 'Vikas', 'Om'];

// let var2 = {
//     name1: 'Bhavesh',
//     name2: 'Kshitij',
//     name3: 'Kajol',
//     name4: 'Ujjwal',
//     name5: 'Vikas',
//     name6: 'Om'
// }

// document.getElementById('id').innerHTML = (var1(3) + (' ') + var2.name4);


// let arr = [];

// arr[0] = 'Bhavesh';
// arr[1] = 'Kshitij';
// arr[2] = 'Kajol';
// arr[3] = 'Om';
// arr[4] = 'Ujjwal';
// arr[5] = 'Vikas';

// document.getElementById('id').innerHTML = arr;


// let arr = new Array('Bhavesh', 'Kshitij', 'Kajol', 'Ujjwal', 'Vikas', 'Om');

// // arr[1] = 'Rahul';
// arr = arr.toString();

// document.getElementById('id').innerHTML = arr.toUpperCase();


// arr = ['Bhavesh', 'Kshitij', 'Kajol', 'Ujjwal', 'Vikas', 'Om'];

// document.getElementById('id').innerHTML = arr.sort();
// document.getElementById('id').innerHTML = arr.length;
// document.getElementById('id').innerHTML = arr[0];
// document.getElementById('id').innerHTML = arr[arr.length - 1];


// let arr = ['Bhavesh', 'Kshitij', 'Kajol', 'Ujjwal', 'Vikas', 'Om'];
// // arr.push("Rahul");
// // arr[arr.length] = "Rahul";
// arr[9] = "Rahul";
// let text = "<ul>"

// for (let i = 0; i < arr.length; i++) {
//     text += "<li>" + arr[i] + "</li>";
// }
// text += "</ul>";

// document.getElementById('id').innerHTML = Array.isArray(arr);
// document.getElementById('id').innerHTML = arr instanceof Array;


const student = {
    serial: 1,
    name: 'Ujjwal Mahajan',
    age: 19,
    subjects: [
        {types: 'Languages', names: ['English', 'Hindi', 'Marathi']},
        {types: 'Maths', names: ['Algebra', 'Geometry']},
        {types: 'Science', names: ['Physics', 'Chemistry', 'Biology']}
    ]
}

let txt = "";

for (let i in student.subjects) {
    txt += "<h2>" + student.subjects[i].types + "</h2>"
    for (let j in student.subjects[i].names) {
        txt += student.subjects[i].names[j] + "<br>";
    }
}

document.getElementById('id').innerHTML = txt;