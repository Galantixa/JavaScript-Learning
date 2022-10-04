// ternary operator = Shortcut for an 'if/else statement'
//                    Takes 3 operands
 
//                    1. a condition with ?
//                    2. expression if True :
//                    3. expression if False
 
// condition ? exprIfTrue : exprIfFalse
/*
let adult = checkAge(19);
console.log(adult);
 
function checkAge(age){
 
    return age >= 18? true : false;
}
*/


siapaYangmenang(true);
 
function siapaYangmenang(win){
 
    win ? console.log("Kamu menang!") : console.log("Kamu kalah!");
}