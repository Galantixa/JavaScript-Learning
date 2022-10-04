// konsep this pada arrow function


// arrow function
/*
const mahasiswa = function() {
    this.nama = 'Fajar';
    this.umur = 19;
    this.sayHello = () =>{
        console.log(`halo nama saya ${nama}, dan saya umur ${umur} tahun`);
    }
}
*/

const box = document.querySelector('.box');
box.addEventListener('click', function (){
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle('size');
    setTimeout(() =>{
        this.classList.toggle('caption');

    },600);

});