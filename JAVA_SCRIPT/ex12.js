let txt = "100, 1000 or 10000";
const pattern = /\d{3,}/g;

let num = txt.match(pattern);

document.getElementById('id').innerHTML = num;

//match replace