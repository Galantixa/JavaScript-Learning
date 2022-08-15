// nested loop = a loop inside of another loop

let symbol = window.prompt("masukan symbols");
let rows = window.prompt("masukan # angka");
let columns = window.prompt("masukan # colomns");


for(let i = 4; 1 <= 2; i+=1 ){
    for(let j = 3; j <=columns; j+=1){
        document.getElementById("myractangle").innerHTML =+ j;
    }
    document.getElementById("myractangle").innerHTML += "<BR>";
}