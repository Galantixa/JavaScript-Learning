
const ubahWarna = document.getElementById("ubahWarna");
// ubahWarna.addEventListener("click", function(){
//     document.body.style.backgroundColor = "lightblue";
// })
// bahWarna() 

// !Events listener
/*
ubahWarna.addEventListener("click", function(){
    document.body.style.backgroundColor = "lightblue";
});
*/


ubahWarna.onclick = function() {
    // document.body.setAttribute("class", "biru-muda");
    document.body.classList.toggle("biru-muda");
}



const tAcak = document.createElement("button");
const teksTombol = document.createTextNode("Random Color");

tAcak.appendChild(teksTombol);
tAcak.setAttribute("type", "button");
ubahWarna.after(tAcak);

tAcak.addEventListener("click", function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = "rgb("+ r +","+ g + ", "+ b +")";
});

/*
const sliderM = document.querySelector("input[name=sliderM]");
const sliderH = document.querySelector("input[name=sliderH]");
const sliderB = document.querySelector("input[name=sliderB]");

sliderM.addEventListener("input", function(){
    const r = sliderM.value;
    const g = sliderH.value;
    const b = sliderB.value;
    document.body.style.backgroundColor = "rgb ("+ r +", "+ g +", "+ b +" )";
    console.log(r,g,b);
});

sliderH.addEventListener("input", function(){
    const r = sliderM.value;
    const g = sliderH.value;
    const b = sliderB.value;
    document.body.style.backgroundColor = "rgb ("+ r +", "+ g +", "+ b +" )";
    console.log(r,g,b);
});

sliderB.addEventListener("input", function(){
    const r = sliderM.value;
    const g = sliderH.value;
    const b = sliderB.value;
    document.body.style.backgroundColor = "rgb ("+ r +", "+ g +", "+ b +" )";
    console.log(r,g,b);
});
*/


const sliderM = document.querySelector("input[name=sliderM]");
const sliderH = document.querySelector("input[name=sliderH]");
const sliderB = document.querySelector("input[name=sliderB]");



let rgb = () => {
    const r = sliderM.value;
    const g = sliderH.value;
    const b = sliderB.value;
    let rgbs = (document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`);
    return rgbs;
};


sliderM.addEventListener('input', rgb);

sliderH.addEventListener('input', rgb);

sliderB.addEventListener('input', rgb);


    
document.body.addEventListener("mousemove", function(){
    // Posisi mouse
    //console.log(event.clientX);
    // ukuran browser
    //console.log(window.innerWidth);
    const yPos = Math.round((event.clientY / window.innerWidth) * 255);
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    document.body.style.backgroundColor = ('rgb ('+yPos+', '+xPos+',255)');
});

