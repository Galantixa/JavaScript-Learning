// secara default, function tidak mengembalikan value
// kata kunci 'return'
// diikuti dengan yang ingin kita hasilkan


function sayHai (firstName, lastName) {
    const say = `Hello ${firstName} ${lastName}`;
    return say;
}

const result = sayHai("Fajar", "Nugraha");
console.log(result); 

function getFinalValue (value) {
    if (value >= 90) {
        return "A";
    }else if (value >= 80) {
        return "B";
    }else {
        return "C";
    }
}
const hasil = getFinalValue(60);
console.log(hasil);

// menghentikan eksekusi dengan return

function isContains (array, searchValue) {
    for (const element of array) {
        if (element === searchValue) {
            return true;
        }
    }
    return false;
}


const array = [1,2,4,5,6,6,4,24,65,63];
const search = 24;
const finds = isContains(array, search);
console.log(finds); 