let numeros = [];

for (let i = 0; i < 100; i++) {
    numeros.push(Math.floor(Math.random() * 200) + 1);
}

console.log("Tabla completa de números: ");
console.table(numeros);

let filtrados = numeros.filter(num => num >= 50 && num <= 100);

console.log("Números entre 50 y 100", filtrados);
console.table(filtrados);



