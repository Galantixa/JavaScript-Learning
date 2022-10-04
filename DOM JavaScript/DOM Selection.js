// ?DOM selection  
// ?document.getElementById --> element
/*
const judul = document.getElementById("judul");
judul.style.color = "#33333";
judul.style.background = "grey";
judul.innerHTML = "Galantixa";
*/
// ?document.getElementsByTagName("") --> HTML collections
/*
const p = document.getElementsByTagName("p");

for ( let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "40px";
*/
// ?document.getElementsByClassName(""); --> HTML collections
// const p1 = document.getElementsByClassName ("p1");

// ?document.querySelector("") 

const p4 = document.querySelector("#b p");
p4.style.color = "orange";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";

// ?document.querySelector("")

const p = document.querySelectorAll("p");
for ( let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = "lightblue";
}






