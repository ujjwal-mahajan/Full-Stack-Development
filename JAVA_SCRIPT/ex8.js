// const now = moment("12-25-2025");

// console.log(moment("20251225").format());
// document.getElementById("id").innerHTML = dt;

//mm-dd-yyyy
//yyyy-mm-dd
// const now =moment().format("Do MM, YYYY");


// const now1 = moment("12-25-2026", ["MM-DD-YYYY", "YYYY-MM-DD"]);
// const now2 = moment("2026-12-25", ["MM-DD-YYYY", "YYYY-MM-DD"]);
// const now3 = moment("25-12-2026", ["MM-DD-YYYY", "YYYY-MM-DD"]);

// document.getElementById("id").innerHTML = now1.format("DD-MM-YYYY")
// + ', ' + now2.format("DD-MM-YYYY") + ', ' + now3.format("DD-MM-YYYY");


const dt = moment();
dt.endOf('hour');

document.getElementById("id").innerHTML = dt.format("DD-MM-YYYY ddd HH:mm:ss");
