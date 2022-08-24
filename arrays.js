
var hewan = [];

    hewan = ["ayam", "kuda", "sapi", "kambing", "kucing", "lalat", "panda", "monyet", "ular"];
    
    for (var i = 0; i < hewan.length; i++) { 
 
    console.log(hewan[i]);
    }

// array method

// 1. join 
var nama = ['fajar', 'galantixa', 'nugraha'];
console.log(nama.join(' - '));

// 2. push & pop

// nama.push('galan');
console.log(nama.join(' '));

nama.pop();
console.log(nama.join());

// 3. unshift & shift 
// nama.unshift("nugraha");
// console.log(nama.join(' ')); // menambahkan element baru di awal 

nama.shift();
console.log(nama.join(' '));

// 4. slice & splice
// splice (menyambung array)
var nama2 = ['saya', 'aku', 'kamu','kita'];

nama2.splice(1, 1, 'milik-Kita', 'punyaku');
console.log(nama2.join(' + '));

// slice (menghasilkan array baru)

var nama3 = nama2.slice(1, 3);
console.log(nama2.join('/'))
// cth: array baru hasil slice
console.log(nama3.join(' '));

// 4. foreach

var angka = [1,2,3,4,5,6,7,8,9,0];

angka.forEach(function(a) {
    console.log(a)

    });

// 5. map

var angka2 = angka.map(function(b){
    return b * 2;
})

console.log(angka2.join("-"));

// 6. sort

var angka3 = [1,2,3,4,5,6,7,14,8,11,12,13,9,10];

angka3.sort(function(a,b){
    return a-b;
})

console.log(angka3.join('|'));

// 7. filter & find
    // filter (untuk mencari banyak nilai)
    // find (untuk menemukan satu nilai)

var angka4 = [1,2,3,4,5,6,7,8,9,0];
var angka5 = angka4.filter(function(c){
    return c > 4;
})

console.log(angka5.join(' . '));