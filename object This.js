// ?Cara 1 - Function declaration
/*
function halo() {
    console.log('halo');
}
halo();
*/
// ?Cara 2 - Object literal
/*
var obj = {};
obj.halo = function() {
    console.log("halo");
}
obj.halo();
*/
// ?Cara 3 - Constructor
/*
function halo() {
    console.log("halo");

}
new halo();
*/
// ?This
// ?Cara 1 - Function declaration
/*
function halo() {
    console.log(this);
    console.log("halo");

}
this.halo();
*/
// ?Cara 2 - Object literal
// ?This(object literal) ==> Mengembalikan object yang bersangkutan
/*
var obj = {cth : "contoh", saja : "saja", untuk : "untuk", ini : "penggunaan 'THIS'"};
obj.halo = function() {
    console.log(this);
    console.log("halo");
}
obj.halo();
*/
// ?Cara 3 - Constructor
// ?This(new) ==> Mengembalikan object yang baru dibuat
function halo() {
    console.log(this);
    console.log("halo");

}
new halo();







