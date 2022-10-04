// ?Apa itu object?
// *Object adalah array yang lebih sakti 
/*

var intro = {
    nama : 'Fajar Nugraha',
    umur : 19,
    ips : [3.60, 2.50, 3.20],
    alamat : {
        jalan : 'Jl. abc No. 123',
        kota : 'Bandung',
        provinsi : 'Jawa Barat',
    }
};
*/

/*

var intro = {
    nama : "Fajar Nugraha",
    noHp : "081224-85232",
    eMail : "galantixaa@gmail.com",
    jurusan : "Teknik Informatika",
}
// Function Declaration
function buatObjectCth(nama, noHp,email,jurusan) {
    var profile = {};
    profile.nama = nama;
    profile.noHp = noHp;
    profile.email = email;
    profile.jurusan = jurusan;
    return profile;
}

var data1 = buatObjectCth("Galantixa", "081224085232", "galantixaa@gmail.com", "Teknik Informatika")

// Constructor
function data2(nama, noHp, email, jurusan) {
    this.nama = nama;
    this.noHp = noHp;
    this.email = email;
    this.jurusan = jurusan;

}

var data2 = new data2 ("Galantixa", "081224085232", "galantixaa@gmail.com", "Teknik Mesin");

*/

// 1. Object Literals
// ! TIDAK EFEKTIF UNTUK OBJECT YANG BANYAK 
// let murid = {
//     nama : 'Galantixa',
//     energi : 10,
//     makan : function(porsi) {
//         this.energy = this.energi + porsi;
//         console.log(`Selamat makan`);
//     }
// }

// 2. Function Declaration 
const methodMahasiswa = {

    makan : function(porsi) {
        this.energi += porsi; 
        console.log(`halo ${this.nama}, selamat makan`);

    },

    main : function(jam) {
        this.energi -= jam;
        console.log(`halo ${this.nama} selamat bermain`);
    },

    tidur : function(jam) {
        this.energi += jam * 2;
        console.log(`halo ${this.nama}, selamat tidur!`)
    }

};

function mahaSiswa (nama, energi) {
    let mahasiswa = {}
    mahasiswa.nama = nama;
    mahasiswa.energi = energi; 
    mahasiswa.makan = methodMahasiswa.makan;
    mahasiswa.main = methodMahasiswa.main;
    mahasiswa.tidur = methodMahasiswa.tidur;
    

    return mahasiswa;
}

let Galantixa = mahaSiswa('Galantixa', 10);
let Fajar = mahaSiswa('Fajar', 10);

// 3. Contstructor Function 
// Keyword New

// function mahaSiswa (nama, energi) {
//     this.nama = nama;
//     this.energi = energi; 
    
//     this.makan = function(porsi) {
//         this.energi += porsi; 
//         console.log(`halo $(this.nama), selamat makan`);

//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`halo selamat bermain`);
//     }
    
// }

// let Galantixa = new mahaSiswa('GALANTIXA');


