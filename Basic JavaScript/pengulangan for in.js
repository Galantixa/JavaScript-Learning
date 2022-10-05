// untuk melakukan iterasi property atau index

const person = {
    firstName : "Fajar",
    midName : "Nugraha",
    lastName : "Galantixa"
};

for (const property in person) {
    console.log(`${property} : ${person[property]}`);
}

const names = ["Fajar", "Nugraha", "Galantixa"];
for(const index in names) {
    console.log(`${index} : ${names[index]}`);
}