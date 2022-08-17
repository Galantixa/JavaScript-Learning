// nested loop = a loop inside of another loop

/*
let symbol = window.prompt("masukan symbols");
let rows = window.prompt("masukan # angka");
let columns = window.prompt("masukan # colomns");


for(let i = 4; 1 <= 2; i+=1 ){
    for(let j = 3; j <=columns; j+=1){
        document.getElementById("myractangle").innerHTML =+ j;
    }
    document.getElementById("myractangle").innerHTML += "<BR>";
}
*/
let s = "";
for(let i = 10; i > 0; i--){
    for(let j = 0; j < i; j++){
        s += "#";
    }
    s += "\n";

}

console.log(s);