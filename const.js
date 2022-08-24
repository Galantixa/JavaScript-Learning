// variable yang tidak bisa di ubah

const PI = 3.14; 
let radius; 
let rumus;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

rumus = 2 * PI * radius;

console.log('maka hasilnya adalah: ', rumus);