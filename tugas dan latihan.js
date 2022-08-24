// !Tugas 4
/*
let jumlahAngkot = 10;
let angkotJalan = 6;

for ( let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++ ){

    if(noAngkot <= angkotJalan){
        console.log("Angkot no. " + noAngkot + " beroperasi dengan baik!");
    } 
    else if ( noAngkot === 8){
        console.log("Angkot no. " + noAngkot + " sedang lembur");
    }
    else {
        console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi!");
    }
}
*/

// !tugas 5
/*
let jumlahAngkot = 10;
let angkotJalan = 6;

for ( let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++ ){

    if(noAngkot <= angkotJalan){
        console.log("Angkot no. " + noAngkot + " beroperasi dengan baik!");
    } 
    else if ( noAngkot === 8 || noAngkot === 10){
        console.log("Angkot no. " + noAngkot + " sedang lembur!");
    }
    else {
        console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi!");
    }
}
*/

// !Tugas 6
/*
let jumlahAngkot = 10;
let angkotJalan = 6;

for ( let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++ ){

    if(noAngkot <= 6 && noAngkot !== 5){
        console.log("Angkot no. " + noAngkot + " beroperasi dengan baik!");
    }
    else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
        console.log("Angkot no. " + noAngkot + " sedang lembur!");
    }
    else {
        console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi!");
    }
}
*/

// !Pengelolaan Penumpang

    // tambah penumpang ()
    // 1. namaPenumpang
    // 2. array penumpang

var penumpang = ['Fajar', 'Nugraha', undefined, 'Galantixa',];
var tambahPenumpang = function(namaPenumpang, penumpang) {;

    // ?jika angkot kosong

    if( penumpang.length == 0) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    }
    // else 
    else {

        // !telusuri seluruh kursi dari awal

        for ( var i = 0; i < penumpang.length; i++){
            // jika ada kursi kosong
            if ( penumpang[i]== undefined) {
                // tambah pemumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;
            }

            // ?jika sudah ada nama yang sama 

            else if ( penumpang[i] == namaPenumpang ) {
                // tampilkan pesan kesalahannya
                console.log (namaPenumpang + ' sudah ada di dalam angkot!')
                // kembalikan isi array & keluar dari function
                return penumpang;
            }

            // !jika seluruh kursi terisi

            else if ( i == penumpang.length -1 ) {
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang)
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
}

// !Hapus Penumpang

var hapusPenumpang = function(namaPenumpang, penumpang) {
    if ( penumpang.length == 0 ) {
        console.log('Angkot masih kosong.');
        return penumpang;
    } else {
        for ( var i = 0; i < penumpang.length; i++ ){
            if ( penumpang[i] == namaPenumpang ) {
                penumpang[i] = undefined;
            } else if ( i == penumpang.length - 1) {
                console.log(namaPenumpang + ' Tidak ada di dalam angkot!');
            }
        }
    }
    return penumpang;
} 




























