// ?Manipulasi Element --> innerHTML = ""
/*
const judul = document.getElementById("judul");
judul.innerHTML = "<em>Galantixa</em>"
 
const sectionA = document.querySelector("section#a");
sectionA.innerHTML = "hello world";
*/ 

// ?Manipulasi Element --> element.style.<propertiCSS> 
/*
const judul = document.querySelector("#judul");
judul.style.color = "lightblue";
judul.style.backgroundColor = "orange";
*/

// ?Manipulasi Element --> element.getAttribute("")
// ?                       element.setAttribute("")
// ?                       element.remove.Attribute("")                        

// const judul = document.getElementsByTagName("h1")[0];
// judul.setAttribute ("name", "Fajar Nugraha");

// const a = document.querySelector("section#a a");
// console.log (a.getAttribute("href"));

const p2 = document.querySelector(".p2");
console.log(p2.classList);

