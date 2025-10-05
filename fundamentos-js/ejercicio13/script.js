let frase = prompt("Escribe una frase:");
let palabras = frase.trim().split(" ");
let cantidad = palabras.length;

console.log("Frase ingresada:", frase);
console.log("Número de palabras:", cantidad);

let salida = document.getElementById("resultado");
if (salida) {
    salida.textContent = `La frase ingresada tiene ${cantidad} palabras.`;
}

