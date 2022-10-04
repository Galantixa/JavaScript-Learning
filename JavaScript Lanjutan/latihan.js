// ambil semua element video
const videos = Array.from ( document.querySelectorAll('[data-duration'));


// pilih hanya "JAVASCRIPT LANJUTAN"
let jsLanjut = videos.filter(videos => videos.textContent.includes('JAVASCRIPT LANJUTAN'))


// ambil durasi masing-masing video
.map(item => item.dataset.duration)


// ubah durasi menjadi int, ubah menit jadi detik
.map (waktu => {

    const parts = waktu.split(':') .map ( part => parseFloat (part));
    return (parts[0] * 60 + parts[1]);
})


// jumlahkan semua detik
.reduce((total, detik) => total + detik)


// ubah formatnya jadi jam, menit, detik
const jam = Math.floor (jsLanjut / 3600 );
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor (jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent =  `${jam} jam, ${menit} menit, ${detik} detik,`;
const jumlahVideos = videos.filter(videos => videos.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVid = document.querySelector('.jumlah-video');
pJmlVid.textContent = `${jumlahVideos} Video.`;

console.log(jsLanjut);
