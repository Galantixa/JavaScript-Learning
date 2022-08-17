// switch = statement that examines a value 
//                 for a match against many case clauses.
//                 More efficient that many "else if" statements


/*
let grade = "A";

switch(grade){

        case "A":
        console.log("kamu hebat!");
        break;
        case "B":
        console.log("kamu lumayan!");
        break;
        case "C":
        console.log("kamu malas!");
        break;
        case "D":
        console.log("kamu buruk!");
        break;
        case "E":
        console.log("kamu jelek!");
        break;
        case "F":
        console.log("kamu gagal! huuuuuu");
        break;
        default:
            console.log(grade, "bukan nilai!")
}
*/

// pop-up pertanyaan yes-no

/*
switch (confirm("Hello World!"))
{
    case true : 
    console.log("Hi There");
    break;
    case false : 
    console.log("You got wrong");
    break;
}

*/


var grade;
 
switch(prompt("masukan Nilai! \n (cth : A, B, C, D, E, F"))

{
    case "A":
        console.log("kamu hebat!\u{1F600}");
        break;
        case "B":
        console.log("kamu lumayan!");
        break;
        case "C":
        console.log("kamu malas!");
        break;
        case "D":
        console.log("kamu buruk!");
        break;
        case "E":
        console.log("kamu jelek!");
        break;
        case "F":
        console.log("kamu gagal");
        break;
        default:
            console.log(grade, "bukan nilai!")
}




   