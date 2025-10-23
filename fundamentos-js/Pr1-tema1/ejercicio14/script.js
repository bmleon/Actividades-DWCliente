function esPalindromo(palabra) {
    let invertida = palabra.split("").reverse().join("");
    return palabra === invertida;
}

let palabra = prompt("Escribe una palabra: ");
let resultado = esPalindromo(palabra);

if (resultado) {
    console.log("La palabra " + palabra + " es un palindromo");

} else {
    console.log("La palabra " + palabra + " no es un palindromo");

}

let salida = document.getElementById("resultado");
if (salida) {
    if (resultado) {
        salida.textContent = `La palabra "${palabra}" es un palíndromo.`;
    } else {
        salida.textContent = `La palabra "${palabra}" no es un palíndromo.`;
    }
}