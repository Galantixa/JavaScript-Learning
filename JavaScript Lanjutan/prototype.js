// const methodMahasiswa = {

//     makan : function(porsi) {
//         this.energi += porsi; 
//         console.log(`halo ${this.nama}, selamat makan`);

//     },

//     main : function(jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama} selamat bermain`);
//     },

//     tidur : function(jam) {
//         this.energi += jam * 2;
//         console.log(`halo ${this.nama}, selamat tidur!`)
//     }

// };

// function mahaSiswa (nama, energi) {
//     let mahasiswa = Object.create (methodMahasiswa); 
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi; 


//     return mahasiswa;
// }

// let Galantixa = mahaSiswa('Galantixa', 10);
// let Fajar = mahaSiswa('Fajar', 10);
// ? Versi Prototype

// function mahaSiswa (nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }
// mahaSiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return ` halo ${this.nama}, selamat makan!`
// }
// mahaSiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     return `halo ${this.nama}, selamat bermain!`
// }
// mahaSiswa.prototype.tidur = function(jam) {
//     this.energi += jam * 2;
//     return `halo ${this.nama}, selamat tidur!`
// }

//  let Galantixa = new mahaSiswa('Galantixa', 10)

// ? Versi Class

class mahaSiswa {
    constructor (nama, energi) {
    this.nama = nama;
    this.energi = energi;

    }
    makan (porsi) {
        this.energi += porsi;
        return ` halo ${this.nama}, selamat makan!`
    }
    main (jam) {
        this.energi -= jam;
        return `halo ${this.nama}, selamat bermain!`
    }
    tidur(jam) {
        this.energi += jam * 2;
        return `halo ${this.nama}, selamat tidur!`
    }
}

let GALANTIXA = new mahaSiswa ('Galantixa', 10);
let FAJAR = new mahaSiswa ('Fajar', 10);
