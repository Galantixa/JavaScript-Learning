// do while loop = do something,
//                             then check the condition,
//                             repeat if condition is true

let userName;

do {
   userName = window.prompt("Masukan nama!"); 
} while(userName == "");

console.log("Hallo ", userName);