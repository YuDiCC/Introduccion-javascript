console.log(`EJERCICIO 1. Dado un arrego de numeros, imprimir solamente aquellos que son denominados numeros primos`)
console.log(` `)

let i=10;
let ejercicio1 = [];

for(j=2; j<=i; j++){
    if(primo(j)){
        ejercicio1.push(j);
    }
}

//Operacion primo
function primo(numero){
    for (let i =2; i<numero; i++){
        if(numero % i === 0){
            return false;
        }
    }
    return numero !==1;
}

console.log(`Es primo: ${ejercicio1}`);