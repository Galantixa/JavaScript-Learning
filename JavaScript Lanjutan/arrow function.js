/*
function tampilPesan (nama) {
    console.log (`halo ${nama}`);
}

tampilPesan('Fajar');
*/

// const tampilNama = (nama , waktu) => {
//     return `selamat ${waktu}, ${nama}`;

// }

// console.log(tampilNama('Galantixa', 'siang'));

// ? Implisit Return 

// const tampilNama = nama => `hallo ${nama}`; 
// console.log('Fajar Nugraha');


let mahasiswa = ['Fajar', 'Nugraha', 'Galantixa'];

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map (nama => ({nama : nama, jmlHuruf: nama.length}));
console.table(jumlahHuruf);