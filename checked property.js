// checkbox & radio button
document.getElementById("myButton").onclick = function(){
const visaBtn = document.getElementById("visaBtn");
const masterCrdBtn = document.getElementById("masterCrdBtn");
const paypalBtn = document.getElementById("paypalBtn");

    if(document.getElementById("myCheckBOX").checked){
        console.log("KAMU TELAH FOLLOW SAYA!");
    }
    else{
        console.log("KAMU TIDAK FOLLOW SAYA!");
    }
    if(visaBtn.checked) {
        alert("kamu bayar pake visa!");
        console.log("kamu bayar pake visa!");
    }
   else if(masterCrdBtn.checked) {
        alert("kamu bayar pake MasterCard!");
        console.log("kamu bayar pake MasterCard!");
    }
    else if(paypalBtn.checked) {
        alert("kamu bayar pake PayPal!");
        console.log("kamu bayar pake PayPal!");
    }
    else{
        alert("kamu harus bayar!");
        console.log("kamu bayar dong!");
    }
    

}