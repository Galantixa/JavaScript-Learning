// melakukan iterasi terhadap isi value dari iterable object, seperti array, string dan lain-lain
// for of tidak digunakan untuk melakukan iterasi data object karena bukanlah iterable

const names = ["Fajar", "Nugraha", "Galantixa"];

for (const name of names) {
    console.log(`${name}`);
}