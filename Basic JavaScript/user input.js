//cara mudah dengan window prompt

let layang = window.prompt ("siapa namamu?");

//cara yang susah dengan html textbox

let box1;

document.getElementById("mybutton").onclick = function(){
    box1 = document.getElementById("mytext").value;
    console.log(box1);
    document.getElementById("mylabel").innerHTML = "hello " + box1;
}   //njing tutor mempersulit diri !!!