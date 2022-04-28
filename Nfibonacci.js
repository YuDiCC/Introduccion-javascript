console.log("Serie Fibonacci")
console.log(" ")

let serie = [0, 1];

for (i = 2; i < 50; i++){

    serie[i] = serie[i - 2] + serie[i - 1];

}

console.log(`${serie}`);

