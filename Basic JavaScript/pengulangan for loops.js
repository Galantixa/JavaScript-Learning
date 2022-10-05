// for loops = repeat some code a
//             certain amount of times

/*
for(let i = 1; i > 10; i+=1){
    console.log(i);
}

for(let i = 100; i > 0; i-=1){
    console.log(i);
}

console.log("HAPPY NEW YEAR!");
*/

/*
for( let nilaiAwal = 1; nilaiAwal <= 100; nilaiAwal += 1){
    console.log("Hello world " + nilaiAwal + " x");
}
var angkotJalan = 8;
var jumlahAngkot = 10;
var noAngkot = 1;

while(noAngkot <= angkotJalan ){
    console.log("Angkot no. " + noAngkot + " Beroperasi dengan baik");
    noAngkot ++;
    
}
for (let nilai2 = angkotJalan + 1; nilai2 <= jumlahAngkot; nilai2 += 1){
    console.log("Angkot no. " + nilai2 + " Rusak");
}
*/

// eternal loop
/*
for (; ;) {
    console.log("For Loop")
}
*/
let counter = 1;
for(; counter <= 10;) {
    console.log(`pengulangan ke ${counter}`);
    counter++;
}
