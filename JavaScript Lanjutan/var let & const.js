// hoisting ==> menaikan variable, funciton
/*
for (var i = 0; i < 10; i ++) {
    console.log(i);
}
*/
// JAVASCRIPT menganut function scope
// tidak seperti bahasa lain yang menganut block scope {}]

// ? IIFE ==> Immediately Invoke Function Expression 
// ? SIAF ==> Self Invoking Anonymous Function
// Dengan Function Expression

/*
(function () {
    for (var i = 0; i < 10; i ++) {
        console.log(i);
    }
}());

console.log(i); // ini akan error karena tidak bisa mengakses i di dalam block scope!
*/
