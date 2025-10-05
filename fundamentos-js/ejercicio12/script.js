function filtrarPar(array) {
    return array.filter(num => num % 2 === 0);

}

let numeros = [1,2,3,4,5,6,7,8,9,10];

let pares = filtrarPar(numeros);

console.log("Array original:", numeros);
console.log("Números pares:", pares);