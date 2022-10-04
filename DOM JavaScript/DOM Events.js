// const p2 = document.querySelector('.p2')

// function ubahWarna() {
//     p2.style.backgroundColor = "lightblue";
    
    
// }
// p2.onclick = ubahWarna();

// const p4 = document.querySelector("section#b p");
// p4.addEventListener("click", function() {
//     alert("Ok");
//     const ul = document.querySelector("section#b ul");
//     const liBaru = document.createElement("li");
//     const teksliBaru = document.createTextNode("Item baru");
//     liBaru.appendChild(teksliBaru);
//     ul.appendChild(liBaru);
// });

const p3 = document.querySelector(".p3");

// !Event handler

// p3.onclick = function() {
//     p3.style.backgroundColor = "lightblue";

// }
// p3.onclick = function(){
//     p3.style.color = "red";

// }

// !Event listener

p3.addEventListener("click", function() {
    p3.style.backgroundColor = "lightblue";

});

p3.addEventListener("click", function(){
    p3.style.color = "red";
});

