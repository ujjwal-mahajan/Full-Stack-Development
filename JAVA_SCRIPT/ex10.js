// let num = [3, 9, 15, 24, 30];

// let txt = num.findIndex(fun);
// let txt = num.findLastIndex(x => x > 31);

// document.getElementById('id1').innerHTML = txt;

// function fun(val, indx, arr) {
//     return val > 18;
// }

// const names = ["Kshitij", "OM", "Ujjwal", "Bhavesh", "Vikas", "Rahul", "Kajol"];
// let num = [27, 30, 36, 45, 39, 30];
// let num = [30, 10, 1, 25, 5, 100];

// document.getElementById('id1').innerHTML = num;

// num.sort(function(a, b) {return a - b});
// num.sort(function(a, b) {return b - a});

// names.sort();
// names.reverse();

// document.getElementById('id2').innerHTML = num;


// let num = [30, 10, 1, 25, 5, 100];

// document.getElementById('id1').innerHTML = num;

// let txt = Math.min.apply(null, num);
// let txt = Math.max.apply(null, num);

// document.getElementById('id2').innerHTML = txt;

// function fun(arr) {
//     return Math.min.apply(null, arr);
// }


let names = [
    {name: "Kajol", age: 27},
    {name: "Om", age: 22},
    {name: "Ujjwal", age: 19},
    {name: "Vikas", age: 21},
    {name: "Kshitij", age: 19}
];

name.short(function(a, b){return a.age - b.age});

disp();

function sortFun() {
    names.sort(function(a, b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return{0};
    });
    disp();
}

function disp() {
    document.getElementById('id1').innerHTML = 
    names[0].name + " is of " + names[0].age + " year old." + "<br>" +
    names[1].name + " is of " + names[1].age + " year old." + "<br>" +
    names[2].name + " is of " + names[2].age + " year old." + "<br>" +
    names[3].name + " is of " + names[3].age + " year old." + "<br>" +
    names[4].name + " is of " + names[4].age + " year old.";
}