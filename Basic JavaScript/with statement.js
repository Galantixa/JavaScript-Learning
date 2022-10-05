// merupakan fitur yang digunakan untuk menurunkan sebuah scope data

// ! TIDAK DI REKOMENDASIKAN with statement
// dapat membuat ambigu

const person = {
    firstName : "Fajar",
    midName : "Galantixa",
    lastName : "Nugraha",

};


with (person) {
    console.log(firstName);
    console.log(midName);
    console.log(lastName);
}