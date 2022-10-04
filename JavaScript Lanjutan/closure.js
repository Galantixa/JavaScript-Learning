// ? Lexical Scope
/*
function init() { 
    let nama = 'Fajar Nugraha';
    function tampilNama() {
        console.log(nama);

    }
    tampilNama();
}
init(); 
*/

// function ucapkanSalam (waktu) {
//     return function(nama) {
//         console.log (`halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);

//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');

// console.dir(selamatMalam('Fajar'));



let add = (function () {
    let counter = 0;
    return function () {

    return ++ counter;
    }
}) ();



console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());


