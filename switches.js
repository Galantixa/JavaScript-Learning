// switch = statement that examines a value 
//                 for a match against many case clauses.
//                 More efficient that many "else if" statements

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
        console.log("kamu gagal! huuuuuu")
        break;
        default:
            console.log(grade, "bukan nilai!")
}
