// let car1 = {
//     brand: "Maruti",
//     model: "Wagon-R",
//     fule: "Petrol"
// }

// console.log()

// let lang = {
//     english: 90,
//     hindi: 80,
//     marathi: 95,
//     maths: {
//         geometry: 54
//     }
// }

// lang.marathi = 75;    //change value of specific key
// // lang.maths = 92;      //add new key and value
// delete lang.hindi;

// console.log(lang.maths.geometry);

let marks = {
    name: "Ujjwal",
    std: 12,
    marks: {
        languages: {
            english: 90,
            marathi: 85,
            hindi: 80
        },
        maths: {
            algebra: 79,
            geometry: 82
        },
        scienge: {
            chemistry: 92,
            physics: 84,
            biology: 78
        },
        social_science: {
            history: 90,
            geography: 94
        },
        sports: 10
    }
}

console.log(marks.marks.maths.geometry)