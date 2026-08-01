// let OTP = Math.random();
// console.log(OTP);
// OTP = OTP * 1000000;
// console.log(OTP);
// OTP = Math.trunc(OTP);
// console.log(OTP);
// OTP = String(OTP),padstart(6, '0');
// console.log(OTP);

let OTP = String(Math.trunc((Math.random()) * 1000000)).padstart(6, '0')

document.getElementById('id').innerHTML = OTP;

// document.getElementById('id').innerHTML = (math.trunc((math.random()) * 1000000));

function fun() {
    let ins_otp = document.getElementById('otp').value;
    if (ins_otp == OTP) {
        document.getElementById('id').innerHTML = "Login Sucessfull";
    }
    else {
        document.getElementById('id').innerHTML = "Login Unsucessfull";
    }
}