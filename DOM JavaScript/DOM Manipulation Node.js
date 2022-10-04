// DOM Manipulation 

// ?document.createElement

const pBaru = document.createElement("p");
const teksBaru = document.createTextNode("Paragraf Baru");

// memasukan tulisan ke dalam paragraf
pBaru.appendChild(teksBaru);
// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement("li");
const teksliBaru = document.createTextNode("Item Baru");
liBaru.appendChild(teksliBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2");

ul.insertBefore(liBaru, li2);




const link = document.getElementsByTagName("a")[0];

sectionA.removeChild(link);

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksh2Baru = document.createTextNode("Judul Baru");

h2Baru.appendChild(teksh2Baru);
sectionB.replaceChild(h2Baru, p4);

// !Tanda Element Baru 

pBaru.style.backgroundColor = "lightblue";
liBaru.style.backgroundColor = "lightblue";
h2Baru.style.backgroundColor = "lightblue";
