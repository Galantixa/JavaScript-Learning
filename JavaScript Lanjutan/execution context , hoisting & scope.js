// ? Execution Context, Hoisting & Scope
// hoisting ==> menaikan variable, funciton


// ? creation phase pada Global Context 

// nama var = undifined
// nama function = fn()
// hoisting
// window = global object
// this = window


// execution phase 


// var nama = 'Galantixa';
// var umur = 19;

// function sayHello() {
//     return `Hallo, nama saya ${nama}, saya ${umur} tahun`;
// }

// Function membuat local execution conext
// yang didalamnya terdapat creation dan execution phase
// punya akses ke window, argument, hoisting 

var nama = 'GALANTIXA';
var username = 'galantixa';

function cetakUrl(username) {
    var instagramUrl = 'https://instagram.com/';
    return instagramUrl + username;

}
console.log(cetakUrl(username));