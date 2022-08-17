//tugas 4
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

//tugas 5
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

//tugas 6

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



