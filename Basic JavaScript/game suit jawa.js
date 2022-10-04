var tanya = true;

while ( tanya ) {

    // menangkap pilihan player
        var p = window.prompt("Pilih : gajah, semut, orang");

    // menangkap pilihan komputer
    // membangkitkan pilihan random
        var compt = Math.random();
        
        if (compt < 0.34){
            compt = "gajah";
        }
        else if (compt >= 0.34 && compt < 0.67){
            compt = "orang";
        }
        else {
            compt = "semut";
        }

    // menentukan rules
    var hasil = "";
        if ( p == compt) {
            hasil = "SERI";
        }
        else if ( p == "gajah" ) {
            hasil = ( compt == "orang" ) ? "MENANG" : "KALAH";
        }
        else if ( p = "orang") {
            hasil = ( compt == "gajah" ) ? "KALAH" : "MENANG";
        }
        else if ( p = "semut") {
            hasil = ( compt == "orang" ) ? "KALAH" : "MENANG";
        }
        else {
            hasil = "Kamu memasukan pilihan yang salah!!"
        }

    // tampilkan hasilnya
    alert ("kamu memilih : " + p + " dan komputer memilih : " + compt + "\nmaka hasilnya : kamu " + hasil +"!");

tanya = confirm("lagi??");

}

alert ("TERIMAKASIH SUDAH BERMAIN")