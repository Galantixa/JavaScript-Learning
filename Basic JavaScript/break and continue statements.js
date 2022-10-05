// break = breaks out of a loop entirely
// continue = skip an iteration of a loop

/*
for(let i = 1; i <= 20; i+=1){
    if(i == 13){
        //continue;
       break;
    }
    console.log(i);
}
*/

let counter = 1;
while (true) {
    console.log(`Perulangan ke ${counter}`);
    counter++;
    
    if(counter > 10) {
        break;
    }
}

for (let i =1; i <= 100; i++) {
    if(i%2 == 0) {
        continue;
    }
    console.log(`Perulangan ganjil ke ${i}`);
}