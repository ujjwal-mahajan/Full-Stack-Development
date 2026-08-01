// const nums = Iterator.from([1, 2, 3, 4, 5, 6]);
// const nums = Interator.from

// let rev = nums.flatMap(x => [x, x*10]);

// let txt = "";

// for (let i of rev) {
//     txt += i + "<br>";
// }

// document.getElementById('id').innerHTML = txt;

// document.getElementById('id').innerHTML = Math.pow(3, 2);

// floor sign trunc ceil

function calc() {
    let num = document.getElementById('num').value;
    let pow = document.getElementById('pow').value;

    let result = 1;

    for (let i = 0; i < pow; i++) {
        result = result * num;
        document.getElementById('id').innerHTML = result;
    }
}