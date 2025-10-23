let numero = Number(prompt("Ingresa un número:"));
let resultado = document.getElementById("resultado");

if (numero % 2 == 0) {
    resultado.textContent = ("El número " + numero + " es par");
} else {
    resultado.textContent = ("El número " + numero + " es impar");
}