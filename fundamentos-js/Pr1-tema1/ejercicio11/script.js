let numeros = [];
for (let i = 0; i < 100; i++) {
    numeros.push(Math.floor(Math.random() * 20) + 1);

}

let numerosUnicos = new Set(numeros);

console.log("Números generados:", numeros);
console.log("Cantidad de números diferentes:", numerosUnicos.size);
console.log("Números que aparecieron al menos una vez:", [...numerosUnicos]);