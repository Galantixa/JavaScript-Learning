// while loop = repeat some code 
//              while some condition is true
//              potentially infinite

let userName = "";

while(userName == "" || userName == null){
    userName = window.prompt("Masukan Nama!");
}
alert("hallo " + userName);
console.log("Hello", userName);