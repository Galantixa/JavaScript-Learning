let a;
let b;
let c;
/*
a = prompt("masukan nilai A");
a = Number(a);

b = prompt("masukan nilai B");
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);

console.log(c);
*/

document.getElementById("submit").onclick = function(){
a = document.getElementById("atextbox").value;
a = Number(a);

b = document.getElementById("btextbox").value;
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);

document.getElementById("clabel").innerHTML = "Kolom C:" + c;
}