// ! NOT logical operator
// typically used to reverse a condition's boolean value
// true -> false  false -> true

let temp = window.prompt("masukan angka!!!");
let sunny = true;

if(!(temp > 12)){
    console.log("It's cold outside");
    alert("diluar dingin");
}
else if (temp > 100){
    alert("maka kamu terpanggang!");
    console.log("maka kamu terpanggang");
}
else{
    console.log("It's warm outside");
    alert("diluar hangat");
}

if(!sunny){
    console.log("It's cloudy outside");
    alert("diluar mendung")
}
else{
    console.log("It's sunny outside");
    alert("diluar cerah")
}