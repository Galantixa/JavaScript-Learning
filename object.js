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