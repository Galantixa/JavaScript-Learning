// slice () extract a section of a strings
//          and return it as a new strings
//          without modifying the original string

let fullName = "GALANTIXA DOE";
let firstName;
let lastName;

//firstName = fullName.slice(0, 9);
//lastName = fullName.slice(10);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ")+ 1);

console.log(firstName);
console.log(lastName);

